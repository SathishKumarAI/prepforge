---
qid: ing_8f15ab4b6d__faang__local
question: 'Explain: Listen Mode — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 486
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:14-05:00'
sources: []
---

**Clarify**  
You’re asking for a design of the “Listen‑Mode” feature in a course‑intro video platform—an audio‑only playback mode that lets learners consume content hands‑free while still seeing key visuals (e.g., slides, captions). I’ll assume we need: low latency streaming, synchronized subtitles, minimal data usage, and offline support.

**Approach**  
1. **Front‑end** – lightweight UI with a toggle for Listen‑Mode; hide video but keep a scrubber and subtitle overlay.  
2. **Back‑end** – store separate audio tracks per lesson; use adaptive bitrate (ABR) to serve 64 kbps AAC streams.  
3. **Sync layer** – embed cue points in the audio file or fetch from a metadata API so subtitles align with playback time.  
4. **Offline** – allow pre‑download of audio+subtitle JSON; cache using Service Workers.

**Depth**  
- *Streaming*: HLS/DASH playlists with 2–3 quality variants; client selects lowest that meets bandwidth, switching on the fly.  
- *Subtitle sync*: Use WebVTT or SRT fetched alongside audio; the player updates `textTrack.cues` at each timestamp.  
- *Data savings*: Audio is ~1/10th of video size; compression + CDN reduces latency to <200 ms.  
- *Scalability*: Stateless API, CDN edge caching; database holds lesson metadata (duration, subtitle URLs). Complexity: O(1) for serving a stream; O(n) for generating playlists per user.

**Edge Cases**  
- Network drops mid‑playback → fallback to cached audio.  
- Subtitle timing drift due to buffering → periodic re‑sync using `currentTime`.  
- Users with disabled captions → skip subtitle fetch.

**Optimize & Communicate**  
Future improvements: pre‑fetch next lesson’s audio, use WebAssembly for faster subtitle rendering, and add AI‑generated transcripts for accessibility. I’d explain the trade‑off between ABR quality vs. data cost, and how CDN edge caching keeps latency low even at scale. This showcases clear reasoning, technical depth, and an eye toward production constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
