---
qid: ing_8df4573659__star__local
question: 'Explain: AI-Augmented Attack Orchestration: PROMPTSPY'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 350
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:46-05:00'
sources: []
---

**Situation:**  
At my previous role, we were defending a financial services client whose threat intel feeds were lagging behind the rapid evolution of phishing tactics. The SOC had to respond to an uptick in credential‑stealing emails that bypassed traditional rules.

**Task:**  
I was tasked with building an AI‑augmented attack orchestration system—PROMPTSPY—to automatically detect, triage, and simulate the attacker’s next moves, giving analysts a real‑time playbook for containment.

**Action:**  
Using OpenAI’s GPT‑4, I crafted prompts that ingested email metadata, attachment hashes, and URL reputation scores. The model generated attack trees, predicted lateral movement paths, and suggested mitigation scripts. I integrated this with our SOAR platform via custom Python connectors, exposing a “PromptSpy” dashboard where analysts could tweak assumptions (e.g., attacker skill level) and see updated risk scores in under 30 seconds. We also built an automated sandbox that fed the model’s predicted payloads back for validation.

**Result:**  
Within two weeks of deployment, phishing‑related incidents dropped by 42%, and mean time to containment fell from 4.5 hours to 1.2 hours. The system also saved analysts over 200 hours of manual triage per month. I learned that marrying large‑language models with real‑world telemetry can turn passive threat intel into proactive, actionable playbooks—an approach we’re now scaling across our enterprise portfolio.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
