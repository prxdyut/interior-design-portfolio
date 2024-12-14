export default function Contact() {
  return (
    <div>
      <div class="py-8 mt-16 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">
          Contact Us
        </h2>
        <p class="mb-8 lg:mb-16 text-center font-semibold text-black sm:text-xl">
          Any Queries? Let us know.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <p
              class=" mb-2 text-sm  text-black"
            >
              Your email
            </p>
            <input
              type="email"
              id="email"
              class="shadow-sm text-black text-sm block w-full p-2.5 rounded-lg border"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <p
              for="subject"
              class="block mb-2 text-sm font-medium text-black "
            >
              Subject
            </p>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-black rounded-lg border "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-black "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
