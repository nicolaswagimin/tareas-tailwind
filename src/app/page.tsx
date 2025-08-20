export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
      <main className="bg-white h-150 w-100 rounded p-4 shadow-lg">
        <span className="flex justify-between text-gray-500 font-bold">
          Tue Feb 18 2025
          <span>9:31:25 p.m.</span>
        </span>

        <h2 className="text-3xl font-bold text-blue-600 mt-4 mb-4">List Tailwind</h2>

        <div className="grid grid-cols-7 text-center font-semibold text-gray-700 mb-2">
          <span>s</span>
          <span>m</span>
          <span>t</span>
          <span>w</span>
          <span>t</span>
          <span>f</span>
          <span>s</span>
        </div>

        <div className="grid grid-cols-7 text-center text-gray-700 font-bold mb-6">
          <span>24</span>
          <span>25</span>
          <span>26</span>
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
        </div>

        <span className="grid grid-cols-4 gap-2 mb-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center bg-green-600 text-white rounded-full text-sm">✓</span>
            <span className="font-semibold text-gray-700">take-out-the-trash</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-700 flex items-center justify-center">9:00 AM</span>
        </span>

        <span className="grid grid-cols-4 gap-2 mb-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center bg-green-600 text-white rounded-full text-sm">✓</span>
            <span className="font-semibold text-gray-700">do-homework</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-700 flex items-center justify-center">12:00 PM</span>
        </span>

        <span className="grid grid-cols-4 gap-2 mb-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400"></span>
            <span className="font-semibold text-gray-700">go to grocery store</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-700 flex items-center justify-center">1:00 PM</span>
        </span>

        <span className="grid grid-cols-4 gap-2 mb-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400"></span>
            <span className="font-semibold text-gray-700">run 5 kilometers</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-700 flex items-center justify-center">4:20 PM</span>
        </span>

        <span className="grid grid-cols-4 gap-2 mb-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400"></span>
            <span className="font-semibold text-gray-700">load the dishwasher</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-700 flex items-center justify-center">9:00 PM</span>
        </span>

        <span className="grid grid-cols-4 gap-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400"></span>
            <span className="font-semibold text-gray-700">Take out the trash</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-700 flex items-center justify-center">9:00 AM</span>
        </span>
      </main>
    </div>
  );
}