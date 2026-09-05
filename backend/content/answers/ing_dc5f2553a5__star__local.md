---
qid: ing_dc5f2553a5__star__local
question: 'Explain: Protocol-Based Rules — Top 6 Firewall Use Cases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 340
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:48:42-05:00'
sources: []
---

**Situation** – At a fintech startup, our API gateway was hit by a surge of bot traffic that bypassed rate‑limiting because the bots spoofed HTTP headers. The engineering team had to protect sensitive endpoints without throttling legitimate users during a quarterly promotion.

**Task** – I needed to design and deploy firewall rules that could filter traffic based on protocol semantics (TCP flags, DNS query types, ICMP codes) while preserving low latency for real customers.

**Action** – First, I performed packet captures with Wireshark to identify anomalous flag combinations: SYN‑ACK storms and malformed TCP options. I then wrote a set of iptables rules using `-m state --state INVALID` and custom chains that dropped packets with those flags. For DNS, I leveraged `dnsmasq`’s “filter” directive to block non‑A/AAAA queries from known malicious IP ranges. ICMP was handled by limiting echo requests per minute via `conntrack`. To avoid false positives, I set up a temporary rule set in the test environment and used Grafana dashboards to monitor drop rates versus legitimate traffic.

**Result** – The new firewall configuration cut bot‑generated traffic by 92 % during peak promotion hours while keeping latency under 15 ms for real users. We also reduced server load, saving roughly $3k/month in cloud costs. I learned that protocol‑level inspection can be a powerful, low‑overhead countermeasure when rate limiting alone is insufficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
