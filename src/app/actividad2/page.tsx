export default function LoginPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sección izquierda con ilustración */}
      <div className="hidden lg:flex w-1/2 bg-white items-center justify-center p-10">
        <img
          src="https://cdn.dribbble.com/users/1787323/screenshots/15787935/media/1a915e36d9ffdc9d5b201cd1e386bc24.png"
          alt="Illustration"
          className="max-w-md"
        />
      </div>

      {/* Sección derecha con formulario */}
      <div className="flex w-full lg:w-1/2 items-center justify-center">
        <div className="w-full max-w-md p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Sign in</h2>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
              Don’t have an account? Sign up
            </a>
          </div>

          {/* Botones sociales */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-100 transition">
              <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-100 transition">
              <img src="https://cdn-icons-png.flaticon.com/512/179/179309.png" alt="Apple" className="w-5 h-5 mr-2" />
              Sign in with Apple ID
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">Or continue with email address</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Formulario */}
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="temp@mail.net"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="************"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Start trading
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
