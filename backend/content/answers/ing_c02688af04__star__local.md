---
qid: ing_c02688af04__star__local
question: 'Explain: Join our team — Constitutional Classifiers: Defending against
  universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 313
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:54:49-05:00'
sources: []
---

**Situation:**  
At a startup building a conversational AI, we noticed that user‑generated prompts were slipping through our safety filters, triggering policy violations and risking regulatory fines.

**Task:**  
I was tasked with designing a robust defense against universal jailbreak attacks—adversarial inputs crafted to bypass any single classifier—and integrate it into the real‑time inference pipeline without hurting latency or accuracy.

**Action:**  
First, I built a *Constitutional Classifier* ensemble that evaluates prompts against an evolving set of ethical principles encoded as a small language model. Using Anthropic’s Constitutional AI framework, I fine‑tuned a 6B parameter model on a curated corpus of jailbreak attempts and policy violations. To ensure scalability, I wrapped the classifier in a microservice with async inference, caching frequent checks. I also implemented a fallback rule: if the classifier confidence dropped below 0.8, the request was routed to a human moderator. Finally, I set up continuous evaluation by running adversarial prompt generators nightly and measuring false‑negative rates.

**Result:**  
After deployment, our false‑positive rate fell from 12% to 3%, while jailbreak success dropped from 18% to <1%. Latency increased only 15 ms per request. The project taught me how to blend large‑scale language models with rule‑based safety layers and the importance of iterative adversarial testing in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
