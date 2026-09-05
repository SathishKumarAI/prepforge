---
qid: ing_705e8f3314__star__local
question: 'Explain: Required Cookies — AI Solution Architect Job Details | EY'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 353
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:11:46-05:00'
sources: []
---

**Situation:**  
When I joined EY’s AI practice, we were tasked with launching a client‑facing analytics portal that would ingest data from multiple internal systems and deliver real‑time insights via a web dashboard. Early testing revealed that users in the EU region kept getting blocked by their browsers because our authentication cookies were being flagged as non‑essential, violating GDPR.

**Task:**  
I had to redesign the cookie strategy so that all mandatory session data stayed within “required” cookies while still enabling personalization features without compromising compliance or performance.

**Action:**  
First, I mapped every cookie in the stack (auth token, CSRF, tracking, UI preferences) and classified them by purpose. Using the ASP.NET Core middleware, I split the authentication cookie into a minimal “session‑id” required cookie that only stored a GUID, while moving all user‑profile data to an encrypted, signed JWT stored in a separate non‑essential cookie. I also leveraged the new `SameSite=None; Secure` attribute for cross‑domain requests and implemented server‑side cookie rotation every 30 minutes to reduce risk. Finally, I added a consent banner that allowed users to toggle optional cookies, updating our analytics scripts to respect that choice.

**Result:**  
After deployment, EU compliance incidents dropped to zero, while the dashboard’s load time improved by 15% because we reduced payload size on each request. The solution also increased user retention in the EU market by 12% over three months. I learned how careful cookie segmentation can reconcile strict privacy regulations with rich, personalized AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
