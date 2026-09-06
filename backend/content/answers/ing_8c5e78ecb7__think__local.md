---
qid: ing_8c5e78ecb7__think__local
question: Bulbul-style TTS has to speak code-mixed, mixed-script text naturally. What
  are the hard parts of text normalization and prosody for Indian-language TTS?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 496
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:20:26-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   *Assume we’re working on a “Bulbul‑style” neural TTS that must handle code‑mixed (e.g., English–Hindi) and mixed‑script (Devanagari/Latin/Arabic) input, aiming for natural prosody.*  

**2. Mental model / framework**  
   *Treat the pipeline as: (a) text‑normalization → (b) grapheme‑to‑phoneme (G2P) → (c) prosodic modeling (intonation, rhythm). Each stage must respect language‑specific rules and cross‑lingual interactions.*  

**3. Step‑by‑step reasoning**  
   - **Normalization challenges:**  
     * Identify script boundaries; map numerals/abbreviations to spoken forms in the correct language.  
     * Resolve ambiguous abbreviations that differ across languages (e.g., “TV” vs “टीवी”).  
     * Handle loanword transliteration inconsistencies (Latin→Devanagari).  
   - **Prosody challenges:**  
     * Align stress patterns: Hindi is syllable‑based, English is stress‑based. Need a joint prosodic model that can switch rules mid‑sentence.  
     * Intonation contours must reflect the speaker’s intention in mixed contexts (e.g., rising intonation for a question in English but falling in Hindi).  
   - **Cross‑lingual integration:**  
     * Maintain consistent pitch and speaking rate when switching scripts; avoid abrupt prosodic “jumps.”  

**4. Common traps to avoid**  
   * Over‑normalizing code‑mixed tokens (e.g., converting all Latin words to Devanagari).  
   * Ignoring regional variations in pronunciation of loanwords.  
   * Treating mixed‑script text as a single language in the prosody model, leading to unnatural rhythm.  

**5. Sanity checks & communication**  
   * Test with edge cases: sentences that switch scripts mid‑word or embed numbers.  
   * Validate prosody by listening to synthesized samples; compare intonation against native speakers.  
   * Explain to stakeholders that the hardest parts are script boundary detection, language‑specific normalization rules, and a hybrid prosodic model capable of dynamic rule switching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
