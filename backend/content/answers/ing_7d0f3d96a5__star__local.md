---
qid: ing_7d0f3d96a5__star__local
question: 'Explain: Build confidence with BIMI — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 370
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:44:04-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving our marketing team's email open rates. Our recent campaigns were stuck around a 12% open rate, and A/B tests showed that recipients weren’t recognizing the brand in their inboxes.

**Task:**  
I had to implement BIMI (Brand Indicators for Message Identification) so that our verified logo would appear next to our emails in major providers like Gmail and Yahoo, thereby boosting brand trust and click‑through rates. The goal was to see a 20% lift in open rates within two weeks of rollout.

**Action:**  
First, I gathered all our DMARC reports and confirmed we had a strict “reject” policy, which is a prerequisite for BIMI. Next, I created an SVG logo that met the 48 × 48 pixel size requirement and submitted it to the Verified Mark Certificate (VMC) program with Adobe’s VMC portal. After receiving the certificate, I updated our mail server’s SPF record to include the BIMI tag: `v=BIMI1; l=https://example.com/logo.svg;`. Finally, I set up a small test group and used Postmark’s “Resend Email” API to trigger a fresh batch of emails with the new BIMI header, monitoring deliverability in real time.

**Result:**  
Within ten days we saw open rates climb from 12% to 15.8%, a 31% increase. Click‑throughs also improved by 18%. I learned that BIMI isn’t just about adding a logo; it requires strict DMARC compliance, proper SVG formatting, and continuous monitoring of email authentication logs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
