---
qid: vq_e6f502efcb__eli5__local
question: Explain the Yarn Architecture?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 245
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:32:13-05:00'
sources: []
---

Imagine you’re running a big kitchen where many chefs (computers) need to share ingredients and tools. **YARN** (Yet Another Resource Negotiator) is the head chef that keeps everything organized.

1. **Resource Manager (RM)** – The manager who knows how much flour, butter, or stove space each chef can use. It watches all available “resources” in the kitchen.
2. **Application Master (AM)** – Each recipe gets its own AM. This person tells the RM what ingredients it needs and how many chefs to assign. Once the recipe starts, the AM runs the cooking steps.
3. **Node Manager (NM)** – The helper on each stove that actually prepares the food. It follows the AM’s orders and reports back when a task finishes or if something goes wrong.

When you submit a big job (like sorting millions of records), YARN first asks the RM for kitchen space, then hands over tasks to NMs via AMs. This way many jobs can run at once without stepping on each other’s toes, just like chefs sharing a busy kitchen efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
