const allowedHeaders = "Content-Type";

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    if (!env.APP_ORIGIN || !origin || origin !== env.APP_ORIGIN) return new Response("Forbidden origin", { status: 403 });

    const corsHeaders = {
      "Access-Control-Allow-Origin": env.APP_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": allowedHeaders,
      "Vary": "Origin"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON" }, { status: 400, headers: corsHeaders });
    }

    if (!payload || typeof payload !== "object" || payload.completed !== 20 || !/^\d{4}-\d{2}-\d{2}$/.test(payload.date)) {
      return Response.json({ error: "A completed daily goal is required" }, { status: 400, headers: corsHeaders });
    }

    if (!env.BOT_TOKEN || !env.CHAT_ID || !env.DAILY_NOTIFICATIONS) {
      return Response.json({ error: "Telegram bot secrets are not configured" }, { status: 503, headers: corsHeaders });
    }

    const notificationKey = `sent:${payload.date}`;
    if (await env.DAILY_NOTIFICATIONS.get(notificationKey)) {
      return Response.json({ sent: true, duplicate: true }, { headers: corsHeaders });
    }

    try {
      const telegramResponse = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: env.CHAT_ID,
          text: `⚽ Математическая тренировка выполнена!\nСегодня решено 20 разных заданий. Дата: ${payload.date}.`
        })
      });
      if (!telegramResponse.ok) {
        return Response.json({ error: "Telegram rejected the notification" }, { status: 502, headers: corsHeaders });
      }
      await env.DAILY_NOTIFICATIONS.put(notificationKey, "sent", { expirationTtl: 60 * 60 * 24 * 60 });
      return Response.json({ sent: true }, { headers: corsHeaders });
    } catch {
      return Response.json({ error: "Could not reach Telegram" }, { status: 502, headers: corsHeaders });
    }
  }
};
