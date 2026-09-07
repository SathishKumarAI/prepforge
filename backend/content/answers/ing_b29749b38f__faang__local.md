---
qid: ing_b29749b38f__faang__local
question: 'Explain: Scripts — uv'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 747
total_tokens: 975
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:39:09-05:00'
sources: []
---

**Clarify**  
The interviewer is asking about *scripts that handle UV data*—most likely the **U** (chrominance‑blue) and **V** (chrominance‑red) components extracted from an image or video before feeding it into a learning pipeline.  Confirm: are we dealing with raw sensor data, JPEG/YUV streams, or pre‑processed NumPy arrays?  

**Approach**  
1. Load the source (e.g., YUV420 frame).  
2. Separate Y, U, V planes.  
3. Resample or subsample U/V to match Y resolution if needed.  
4. Stack or concatenate into a 3‑channel tensor for a CNN.  
5. Normalize each channel separately.  

**Depth**  
```python
import numpy as np

def yuv420_to_rgb_tensor(yuv_bytes, width, height):
    # 1: parse planes
    y_size = width * height
    uv_size = (width // 2) * (height // 2)
    y = np.frombuffer(yuv_bytes[:y_size], dtype=np.uint8).reshape(height, width)

    u = np.frombuffer(
        yuv_bytes[y_size:y_size+uv_size],
        dtype=np.uint8
    ).reshape(height//2, width//2)
    v = np.frombuffer(
        yuv_bytes[y_size+uv_size:],
        dtype=np.uint8
    ).reshape(height//2, width//2)

    # 2: upsample U/V (nearest‑neighbor is cheap and works for CNNs)
    u_up = np.repeat(np.repeat(u, 2, axis=0), 2, axis=1)
    v_up = np.repeat(np.repeat(v, 2, axis=0), 2, axis=1)

    # 3: stack channels
    rgb_like = np.stack([y, u_up, v_up], axis=-1).astype(np.float32) / 255.0

    return rgb_like  # shape (H,W,3)
```
*Complexity*: O(H·W), linear in pixel count; memory‑footprint is minimal because we reuse buffers.

**Edge Cases**  
- **Non‑standard subsampling** (e.g., YUV444) → skip upsampling.  
- **Corrupted frames** → guard against buffer overflows.  
- **Variable frame sizes** → validate width/height before parsing.

**Optimize & Communicate**  
For production, vectorize the upsampling with OpenCV’s `resize` or use TensorFlow’s `tf.image.resize`. If GPU‑accelerated pipelines are in play, keep data on device to avoid host↔device copies. I’d present this as a modular preprocessing module that can be swapped for any chroma format, stressing its O(1) per pixel runtime and negligible memory overhead—critical for real‑time inference on mobile or edge devices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
