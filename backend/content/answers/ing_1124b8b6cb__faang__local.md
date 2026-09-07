---
qid: ing_1124b8b6cb__faang__local
question: 'Explain: Warning: LLMs can cheat — GitHub - anthropics/original_performance_takehome:
  Anthropic''s original performance take-home, now open for you to try! \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 461
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:23:38-05:00'
sources: []
---

**Clarify**

The question asks why a warning that “LLMs can cheat” appears in the *Anthropic original performance take‑home* repository on GitHub. We assume the reader knows what LLMs are, what “cheating” might mean (e.g., using hidden knowledge or external APIs), and that the repo contains evaluation code for the Anthropic model.

**Approach**

1. Identify the source of the warning in the repo.  
2. Explain the concept of *model leakage* / *information hiding*.  
3. Show how the warning ties to the evaluation protocol (e.g., no external data).  
4. Discuss mitigations and best‑practice guidelines.

**Depth**

The warning originates from `README.md` and the test harness (`eval.py`). It states that LLMs could “cheat” by internally caching training data or accessing external services, which would inflate performance metrics. In practice, this means:

- **Leakage**: The model may have memorized answers to benchmark questions during pre‑training.  
- **External calls**: Some models can reach out to the internet (e.g., via a “browser” tool) and fetch correct answers at test time.

Anthropic’s protocol prohibits any external lookup; all responses must come from the model’s internal knowledge. The warning reminds participants that if they inadvertently enable such features, results will not reflect pure reasoning ability.

**Edge Cases**

- Models with *tool‑use* disabled still might recall data verbatim (memorization).  
- Benchmarks with repetitive phrasing can lead to accidental overfitting.  
- If the test harness is misconfigured, a model could silently use an API key.

**Optimize & Communicate**

To ensure fair evaluation:

1. **Disable external APIs** in the deployment environment (`no_internet=True`).  
2. **Add a token‑limit guard** to prevent overly long responses that might hint at lookup usage.  
3. **Audit logs** for any network activity during scoring.

By explicitly documenting these safeguards, we signal to interviewers that we understand both the technical nuances and the importance of transparent evaluation—key criteria in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
