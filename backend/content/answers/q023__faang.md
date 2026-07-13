---
qid: q023
question: "What is the difference between symbolic AI and connectionist (neural) AI?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll contrast the two paradigms along representation, learning, and interpretability, then note hybrids. Confirm we want conceptual comparison, not history alone.

**Approach** — Frame each paradigm by how it represents knowledge and how knowledge gets in, then compare strengths.

**Depth** — *Symbolic AI* (GOFAI) represents knowledge as explicit symbols, rules, and logic — expert systems, knowledge graphs, planners. Reasoning is deductive over hand-crafted or curated rules. Strengths: interpretable, verifiable, strong on discrete logic and constraints; needs little data. Weakness: brittle, poor at perception, and expensive to author rules for messy real-world inputs. *Connectionist AI* uses distributed numeric representations in neural networks; knowledge is *learned* from data via gradient descent adjusting weights. Strengths: excels at perception (vision, speech, language), generalizes from examples, no explicit feature rules. Weakness: opaque, data-hungry, can hallucinate, and struggles with strict logical guarantees.

**Edge cases** — Pure neural nets fail at systematic compositional reasoning; pure symbolic fails on raw pixels/audio.

**Optimize & communicate** — The frontier is *neuro-symbolic* hybrids: neural perception feeding symbolic reasoning, or LLMs calling tools/solvers. I'd close by noting modern LLMs are connectionist but increasingly bolt on symbolic scaffolding. Signal: I understand paradigms as complementary tools, not tribal camps.
