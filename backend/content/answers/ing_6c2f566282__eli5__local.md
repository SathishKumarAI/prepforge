---
qid: ing_6c2f566282__eli5__local
question: 'Explain: Capacity Planning — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 242
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:27:10-05:00'
sources: []
---

Think of Spotify’s streaming service like a huge concert hall that must seat every fan at the same time without any seats getting overcrowded or empty.  
**Capacity planning** is the process of figuring out how many “seats” (servers, database connections, bandwidth) the hall needs so that every listener can play music smoothly while keeping costs reasonable.

- **Load** = number of people inside the hall at once.  
- **Throughput** = songs streamed per second; it’s like how fast the doors open for new guests.  
- **Latency** = time from hitting “play” to hearing sound; imagine the delay between a cue and applause.

Neo Kim and Hayk suggest measuring real traffic patterns (daily listeners, peak hours), then adding a safety margin (a buffer of extra seats) so sudden surges don’t cause buffering or crashes. They also recommend scaling in small steps—adding more “rooms” only when needed—so the hall never becomes too big or too empty. This keeps Spotify’s music flowing smoothly for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
