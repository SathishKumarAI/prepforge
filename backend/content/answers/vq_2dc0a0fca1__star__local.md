---
qid: vq_2dc0a0fca1__star__local
question: I must put a repeating frame around these fields. How do I do this easily?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 439
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:53:36-05:00'
sources: []
---

**Situation**  
I was working on a survey module for our mobile app where users had to fill out multiple address blocks—home, work, and emergency contacts. Each block needed a distinct border so that the form looked organized but we also wanted to keep the code DRY.

**Task**  
Create a reusable “frame” component that could be applied to any group of input fields without duplicating CSS or markup, while ensuring it stayed responsive across iOS and Android.

**Action**  
I leveraged React Native’s `StyleSheet` with a higher‑order component (HOC). First, I defined a base style:

```js
const frame = {
  borderWidth: 1,
  borderColor: '#ddd',
  padding: 12,
  marginVertical: 8,
  borderRadius: 6,
};
```

Then I wrapped the `TextInput` groups in a `<Frame>` component that spreads this style and accepts children. Inside the HOC, I added conditional logic to change the border color when an input is focused using the `useState` hook:

```js
const Frame = ({children}) => {
  const [active, setActive] = useState(false);
  return (
    <View style={[frame, active && {borderColor: '#4a90e2'}]}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          onFocus: () => setActive(true),
          onBlur: () => setActive(false),
        })
      )}
    </View>
  );
};
```

This kept the component generic and reusable.

**Result**  
Implemented across five form screens, we cut CSS duplication by 70 %. The UI became consistent, and our QA reported a 30 % reduction in layout bugs. I learned how to balance abstraction with flexibility—creating a small wrapper that still allowed per‑field overrides when needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
