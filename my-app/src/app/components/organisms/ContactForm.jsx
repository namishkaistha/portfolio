// src/app/components/ContactForm.jsx
export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mgvkekoo"
      method="POST"
              className="w-full max-w-2xl mx-auto p-6 bg-gray-300 dark:bg-gray-700 rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Let's Chat</h2>

      <label className="block mb-2">
        <span className="text-gray-700 dark:text-gray-300">Name</span>
        <input
          type="text"
          name="name"
          required
          className="mt-1 block w-full rounded border-gray-300 p-2 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
        />
      </label>

      <label className="block mb-2">
        <span className="text-gray-700 dark:text-gray-300">Email</span>
        <input
          type="email"
          name="email"
          required
          className="mt-1 block w-full rounded border-gray-300 p-2 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 dark:text-gray-300">Message</span>
        <textarea
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded border-gray-300 p-2 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
        />
      </label>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition"
      >
        Send Message
      </button>
    </form>
  );
}
