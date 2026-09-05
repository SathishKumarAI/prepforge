---
qid: ing_2ed5671b7e__eli5__local
question: 'Explain: Easy Failover — An Introduction to DNS Traffic Management - Shopify'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 241
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:49:52-05:00'
sources: []
---

**Easy Failover – a simple way to keep your shop online**

Think of your Shopify store as a busy café that can serve customers from two kitchens: the main kitchen (your primary server) and a backup kitchen (a secondary server). When the main kitchen is open, all orders go there. If something goes wrong—say the stove breaks or power cuts out—the café instantly sends new orders to the backup kitchen so no customer waits.

In the digital world this switch happens through DNS traffic management. Your domain’s DNS records are like a phone book that tells browsers where to find your site. With *Easy Failover*, you set up two addresses: one for the primary server and one for the backup. A small “watchdog” checks the primary; if it stops answering, the watchdog automatically changes the DNS entry so new visitors go straight to the backup address.

So, Easy Failover is just a safety net that keeps your online store humming even when part of its infrastructure fails—just like having a ready‑to‑cook backup kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
