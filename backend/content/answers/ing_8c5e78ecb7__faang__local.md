---
qid: ing_8c5e78ecb7__faang__local
question: Bulbul-style TTS has to speak code-mixed, mixed-script text naturally. What
  are the hard parts of text normalization and prosody for Indian-language TTS?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 551
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:40-05:00'
sources: []
---

**Clarify**  
The question asks which steps in a Bulbul‑style (code‑mixed, mixed‑script) Indian‑language TTS pipeline are hardest: *text normalization* and *prosody*. We assume the system must handle English + regional scripts (e.g., Hindi Devanagari, Tamil), switch languages mid‑sentence, and preserve natural intonation.

**Approach**  
1. Enumerate challenges in each sub‑task.  
2. Explain why they are difficult for Indian contexts.  
3. Touch on algorithmic trade‑offs.

**Depth**

| Stage | Hard Parts | Why Indian? |
|-------|------------|-------------|
| **Text Normalization** | • **Script detection & conversion** – ambiguous Romanized words (e.g., “kya” vs. “कया”) require language‑model disambiguation. <br>• **Numerals & dates** – multiple calendars, locale‑specific formats. <br>• **Acronyms/Slang** – high prevalence in social media; no standard dictionary. | India’s multilingual, multi‑script environment means a single token can belong to many languages; context is crucial. |
| **Prosody** | • **Syllabic timing across scripts** – Devanagari syllables differ from Latin; automatic duration models must adapt. <br>• **Code‑switch cues** – prosodic changes (pitch rise, pause) often signal a switch; detecting them without explicit markers is hard. <br>• **Regional accent variation** – same word pronounced differently across states; requires speaker‑specific prosody modeling. | Pronunciation norms vary widely; a single rule set cannot capture all regional intonation patterns. |

**Edge Cases**

* Mixed‑script tokens that look like numbers (e.g., “१२३” vs. “123”).  
* Insertion of non‑verbal sounds (“uhm”, “ha”) in code‑switching contexts.  
* Long stretches of English in a Hindi sentence causing prosodic mismatch.

**Optimize & Communicate**

- Use language‑model‑based script classifiers to resolve ambiguities before normalization.  
- Build separate prosody models per language and blend them via attention over a *language‑switch token*.  
- Train on large, balanced multilingual corpora with explicit switch markers; fine‑tune for regional accents.

Explain that the biggest gains come from robust **contextual disambiguation** (text) and **adaptive prosodic blending** (prosody), which together make the TTS sound natural across India’s linguistic mosaic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
