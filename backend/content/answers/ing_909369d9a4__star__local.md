---
qid: ing_909369d9a4__star__local
question: What is domain name resolution? — What Happens When You Type a URL Into
  Your Browser? - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 333
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:48-05:00'
sources: []
---

**Situation:**  
During my senior year I built a prototype web app for a local coffee shop that needed to be reachable from anywhere in the city. The owner insisted on using a custom domain instead of the platform’s default subdomain.

**Task:**  
I had to set up the domain so that when users typed “www.coffeehub.com” into their browsers, they were directed to our app’s IP address, and the process was fast enough for a smooth user experience.

**Action:**  
First I registered the domain with GoDaddy and logged into Cloudflare to manage DNS. I created an A record pointing to our EC2 instance’s public IP and set a TTL of 300 seconds so changes propagate quickly but still allow caching. Then, in the browser console, I inspected the network tab: the first request hit Cloudflare’s edge server, which performed a recursive lookup—sending queries to root nameservers, then TLD servers (.com), finally returning the authoritative A record. I verified that subsequent requests used the cached IP from the browser and from Cloudflare’s CDN, reducing latency by ~40 ms per round‑trip.

**Result:**  
The domain resolved in under 50 ms for 95% of users, keeping page load times below 2 seconds even during peak traffic. I learned how DNS caching, TTL settings, and CDNs work together to balance speed and reliability—critical knowledge for any scalable web system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
