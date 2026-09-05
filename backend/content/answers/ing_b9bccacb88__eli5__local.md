---
qid: ing_b9bccacb88__eli5__local
question: 'Explain: Results from human red teaming — Constitutional Classifiers: Defending
  against universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 223
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:31:42-05:00'
sources: []
---

Think of an online chat as a city where everyone follows a set of traffic rules—no shouting, no littering, no dangerous shortcuts. A “universal jailbreak” is like a clever driver who learns how to cheat every rule at once: they find a loophole that lets them speed through any checkpoint without getting caught.

Anthropic’s “Constitutional Classifiers” act as a team of city inspectors trained by humans. First, people give the inspectors examples of good and bad driving (good responses vs. jailbreak attempts). The inspectors learn a *constitution*—a list of principles such as “be safe,” “don’t lie,” and “respect privacy.” Whenever the AI tries to cheat, the inspector checks its action against this constitution. If it violates any principle, the inspector stops it.

So, instead of fighting every new trick one by one, the system learns a general rulebook from humans and uses that book to block all future jailbreaks at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
