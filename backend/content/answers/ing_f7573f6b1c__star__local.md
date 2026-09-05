---
qid: ing_f7573f6b1c__star__local
question: 'Explain: Content Delivery Networks (CDNs) — How DNS Actually Works - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 311
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:25-05:00'
sources: []
---

**Situation** – At my previous company we launched a global e‑commerce site that was experiencing latency spikes during peak traffic in Asia. Users complained of slow page loads, especially when retrieving product images from our cloud storage.

**Task** – I had to redesign the content delivery strategy so that image requests were resolved within 50 ms on average, while keeping cost and complexity manageable.

**Action** – I started by mapping out how DNS resolves a CDN hostname: a user’s resolver queries the authoritative nameserver, receives the nearest edge server IP via round‑robin or GeoIP, then the browser contacts that edge node. I implemented Cloudflare as our CDN provider, configured CNAME flattening for our custom domain, and set up edge caching rules to store images at 100+ PoPs worldwide. To speed resolution, I added a secondary DNS tier (AWS Route 53) with health checks, so failed nodes automatically redirected traffic to healthy ones. I also tuned TTLs—shorter in the first week to capture load shifts, then extended once stability was proven.

**Result** – Page load times dropped from 1.2 s to 0.45 s globally; our bounce rate fell by 18 %. The exercise taught me that DNS is not just name resolution—it’s a performance lever when paired with edge caching and health‑check orchestration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
