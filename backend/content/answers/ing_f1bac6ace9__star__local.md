---
qid: ing_f1bac6ace9__star__local
question: 'Explain: Exploitation Payload Delivery and Installation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 386
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:31:38-05:00'
sources: []
---

**Situation:**  
While leading a penetration‑testing engagement for a fintech client, the security team discovered that an internal API endpoint was vulnerable to model injection attacks. The client’s machine‑learning pipeline processed user data in real time and had no safeguards against tampering.

**Task:**  
I needed to demonstrate how an attacker could deliver a malicious payload into the ML model, install it without detection, and then use it to exfiltrate sensitive transaction details—all while keeping logs quiet for at least 48 hours.

**Action:**  
First, I crafted a small adversarial neural‑net that performed a “model poisoning” attack: a tiny weight perturbation hidden in a benign-looking `.pkl` file. Using the vulnerable API, I sent the payload via a POST request encoded as base64 inside a legitimate JSON body. The server’s deserialization step automatically loaded the pickle into memory, overwriting part of the production model. Next, I used a covert channel—embedding a DNS‑based exfiltration routine within the altered model—to send stolen data to my controlled domain, all while keeping HTTP response codes normal. Finally, I scheduled the payload to trigger only after 72 hours, using an internal cron job that the client’s DevOps team had overlooked.

**Result:**  
The malicious model ran for two days before detection, exfiltrating ~250 GB of user transaction logs without raising any alerts. The incident prompted the client to implement strict content‑type validation, runtime integrity checks (using SHA‑256 hashes), and continuous monitoring of inbound model files. I learned that payload delivery in AI contexts is as much about stealthy deserialization tricks as it is about model manipulation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
