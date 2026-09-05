---
qid: ing_8ad286ad44__eli5__local
question: 'Explain: Personalization at Spotify using Cassandra & HDFS'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 252
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:16:18-05:00'
sources: []
---

Imagine you’re in a huge music library that’s split into two parts: one part is like a super‑fast filing cabinet (Cassandra) and the other is a giant archive box (HDFS).  

When you play a song on Spotify, the system instantly looks in the filing cabinet to see which songs you liked before, what playlists you’ve built, and how often you skip certain tracks. Cassandra stores these quick “personal” facts—your listening habits, likes, and dislikes—in small, easily reachable cells.  

Meanwhile, every time you listen, the long‑term archive box logs everything: all songs played, timestamps, device used, and the exact audio data of each track. HDFS holds this massive, unchanging record because it’s too big to fit in the cabinet but still needs to be kept for future analysis.

The two systems talk to each other like a chef (Cassandra) who knows your taste from past orders and an archivist (HDFS) who keeps all recipes and customer logs. Together they let Spotify recommend fresh playlists that feel just right for you, while also preserving every listening moment for research and improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
