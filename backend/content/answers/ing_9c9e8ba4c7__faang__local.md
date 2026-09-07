---
qid: ing_9c9e8ba4c7__faang__local
question: How does the receiver unsubscribe from a live video?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 432
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:48:02-05:00'
sources: []
---

**Clarify**  
The question asks how a *receiver* (client device) stops receiving a live‑stream video. I’ll assume:  

- The stream is delivered over RTP/RTSP or WebRTC, possibly via an HLS/DASH fallback.  
- “Unsubscribe” means the client stops pulling frames and releases resources without tearing down the entire session.  

**Approach**  
1. Detect user intent (UI click, timeout).  
2. Send a control message to the server to cancel the stream subscription.  
3. Stop local decoding & rendering.  
4. Clean up network sockets / WebSocket connections.  

**Depth**  
- **Client side:** On UI action, invoke `unsubscribe()` which:  
  * Calls `session.close()` on the media session (WebRTC) or sends an RTSP TEARDOWN/PLAY‑STOP request.  
  * Cancels any periodic keep‑alive timers and frees decoder buffers.  
  * If using HLS/DASH, abort pending XHR/fetch requests for segments.  

- **Server side:** Receives the unsubscribe request, decrements reference counts on the stream source, stops pushing RTP packets to that client, and possibly scales down transcoding if no other subscribers exist.  

Complexity: O(1) per subscriber; network overhead is minimal (a single control packet).  

**Edge Cases**  
- Network loss before control packet arrives → implement timeout‑based fallback to auto‑unsubscribe after N seconds of silence.  
- Multiple concurrent streams → maintain a map of stream IDs to sessions.  
- Security: validate unsubscribe requests against session tokens.  

**Optimize & Communicate**  
Use lightweight signaling (e.g., WebSocket or QUIC) for control, and keep the media pipeline decoupled so that unsubscribing doesn’t affect other streams. Explain that this design balances responsiveness, resource cleanup, and scalability—key points interviewers look for in a FAANG‑style solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
