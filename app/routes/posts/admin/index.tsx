/**
 * Anything inside app/routes/posts/admin/
 * be rendered inside of app/routes/posts/admin.tsx
 */
import { Link } from "@remix-run/react";

export default function AdminIndex() {
  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create a New Post
      </Link>
    </p>
  );
}
