---
qid: ing_f120672513__star__local
question: 'Explain: Follow us — Hugging Face - Current Openings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 380
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:31-05:00'
sources: []
---

**Situation**  
At the end of my PhD I was looking for a data‑science role that would let me work on real NLP pipelines. Hugging Face’s “Follow us” page listed a Machine Learning Engineer opening focused on transformer fine‑tuning, which matched exactly what I’d built in my thesis.

**Task**  
I needed to showcase my ability to take a pre‑trained model, adapt it to a domain‑specific dataset, and deploy the solution at scale—all while proving I could collaborate with their open‑source community.

**Action**  
First, I cloned the latest 🤗 Transformers repo, added my own tokenizer trained on a 5M token legal corpus, and fine‑tuned BERT for named‑entity recognition. I wrapped the model in a FastAPI service, containerised it with Docker, and pushed the image to GitHub Actions CI/CD pipelines that auto‑tested with unit tests (coverage >90%). Then I wrote a short blog post on my personal site explaining the architecture and posted the link in my application. Finally, I joined Hugging Face’s Discord community to answer questions about their “🤗 Hub” API, demonstrating my engagement.

**Result**  
Within two weeks I received an interview call; during the technical round I presented the Dockerised pipeline and explained my trade‑offs between latency vs accuracy (achieving 92% F1 at <200 ms inference). The team offered me a full‑time position. I learned how to translate research into production code, and that showing community involvement can be as persuasive as metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
