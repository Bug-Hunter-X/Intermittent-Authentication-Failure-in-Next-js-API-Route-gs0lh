```javascript
import {unstable_getServerSession} from "next-auth/next";

const myRoute = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // ... rest of your code
};
```