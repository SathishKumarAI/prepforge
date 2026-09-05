---
qid: ing_1895834696__star__local
question: 'Explain: Streaming using gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 373
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:05-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with deploying a real‑time image classification model for a security camera network. The cameras streamed video frames at 30 fps to our edge servers, and we needed the inference latency to stay below 150 ms per frame.

**Task:**  
I had to design a low‑latency pipeline that could ingest continuous streams of JPEG frames from dozens of devices, run them through our TensorFlow model, and push predictions back without buffering delays or packet loss.

**Action:**  
I chose gRPC’s bidirectional streaming API. On the client side I wrapped each camera feed in a `grpc.ClientStream` that sent serialized `ImageRequest` messages as soon as a frame was captured. The server exposed a `PredictStream` service; it received frames, decoded them with OpenCV, ran inference via TensorFlow Lite, and streamed back `PredictionResponse` objects immediately. I added flow‑control by setting the channel’s `max_receive_message_size` to 5 MB and used `grpc.keepalive_time_ms` to prevent idle disconnections. For reliability I implemented retry logic with exponential backoff and monitored round‑trip times with Prometheus.

**Result:**  
The streaming solution reduced per‑frame latency from ~400 ms (REST polling) to <120 ms, meeting the SLA. Throughput increased by 2× across 50 cameras, and we cut GPU utilization by 30% thanks to efficient batching in the stream handler. I learned that gRPC’s built‑in flow control and lightweight protobuf messages are ideal for continuous ML inference workloads where latency beats throughput is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
