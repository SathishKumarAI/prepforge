---
qid: ing_9b293f0e40__eli5__local
question: 'Explain: How we handle hardware remediation — How Facebook keeps its large-scale
  infrastructure hardware up and running - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 250
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:43:28-05:00'
sources: []
---

Imagine a huge, bustling city where every house is a server and the streets are cables that carry traffic. When a house starts leaking (a failing hard drive) or a street cracks (a bad switch), the city’s maintenance crew—Meta’s hardware‑remediation team—rushes in to patch it before anyone gets stuck.

They keep a “digital toolbox” called *Fabric* that watches all devices for warning signs: temperature spikes, error counts, or slow responses. When a fault is spotted, Fabric automatically pulls the affected component out of service and swaps it with a spare from a ready‑stock pool—just like swapping a broken street lamp with a new one in the city’s inventory.

If a problem can’t be fixed on the spot, the crew records a ticket, diagnoses the root cause, then sends the faulty part to a repair bay where technicians replace or reprogram it. Once the fix is verified, the component returns to its place and resumes normal traffic.

By continuously monitoring, swapping, and repairing like this, Meta keeps billions of servers humming smoothly—so users can scroll, share, and watch videos without interruption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
