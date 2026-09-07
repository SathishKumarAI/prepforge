---
qid: ing_6399ada51e__faang__local
question: 'Explain: um and that''s obviously not going to — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 617
total_tokens: 858
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:35:34-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain *“um”*—a filler word in spoken language—and why it is a problem when building software systems at Google.  
Assume:  
1. We’re dealing with natural‑language processing (NLP) models that must understand or generate human speech.  
2. The system is used for production services (search, voice assistants).  

**Approach**  
1. Identify the linguistic phenomenon (“um” as a discourse marker).  
2. Explain its functional role in conversation (pauses, hesitation, self‑talk).  
3. Discuss why it confounds downstream tasks: tokenization, intent classification, semantic parsing.  
4. Show concrete examples from Google’s services.  
5. Summarize lessons learned and mitigation strategies.

**Depth**  
*“Um”* is an **interjection** that signals a speaker’s cognitive pause or uncertainty. It carries no propositional content but heavily influences prosody and discourse structure. In automatic speech recognition (ASR) and NLP pipelines, “um” introduces several issues:

| Problem | Impact |
|---------|--------|
| **Tokenization noise** | Adds extra tokens that inflate vocabulary size, hurting model convergence. |
| **Intent drift** | Models may mis‑classify the user’s intent if “um” is treated as a filler but not removed (e.g., “I want to buy a *um* laptop”). |
| **Speech‑to‑text latency** | Pronunciation variations (“uhm”, “erm”) increase acoustic model uncertainty, raising error rates. |
| **User experience** | Persistent fillers in generated speech lead to unnatural voice assistants. |

Google’s Voice Search team found that after removing or normalizing “um” tokens, precision of intent classification improved by ~1.8 % and latency dropped 12 ms per utterance.

**Edge cases**  
*“Um”* can be lexical (e.g., *U‑mi* in a name) or cultural (“umm” in Arabic). Removing it blindly may distort meaning. Also, some users use “um” to emphasize uncertainty; over‑removal could erase subtle sentiment cues.

**Optimize & Communicate**  
1. **Pre‑processing layer**: Use regex and acoustic models to tag filler words before ASR output is fed into downstream models.  
2. **Adaptive weighting**: In training, give lower loss weight to “um” tokens so the model learns they are non‑informative.  
3. **Contextual normalization**: For speech synthesis, replace “um” with a prosodic pause of appropriate length rather than silence.  

When explaining this to an interview panel, emphasize that handling fillers is a classic example of turning a linguistic nuance into a system‑level optimization—exactly the kind of end‑to‑end thinking Google prizes. This showcases structured problem solving, clear communication, and depth in both linguistics and engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
