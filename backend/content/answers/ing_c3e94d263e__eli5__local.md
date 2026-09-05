---
qid: ing_c3e94d263e__eli5__local
question: 'Q: How do you handle "Conflicting Memories" in an agentic system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 240
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:46:29-05:00'
sources: []
---

Think of a robot’s memory like a kitchen pantry where recipes (memories) are stored on shelves. Sometimes two recipes say different things about the same dish—maybe one says “add sugar first,” another says “don’t add sugar.” An agentic system faces this *conflict* when it tries to decide what to do.

The robot resolves it by treating each recipe as a *source claim*. It checks who wrote it (the original data collector, a user, or a sensor), how recent the claim is, and whether other evidence backs one version. If the newer, more reliable source says “add sugar,” that shelf gets updated and the older conflicting entry is moved to a backup drawer. If both are equally trustworthy, the robot keeps them separate, noting “there’s disagreement” so future decisions can weigh context.

In short: it scores each memory by origin, age, and corroboration; the highest‑scored one wins, while others are archived for later review—just like a careful chef chooses the best recipe when two disagree.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
