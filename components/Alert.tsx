interface AlertProps {
  message?: string;
}

const Alert = ({ message }: AlertProps) => {
  return (
    <div className="p-20 bg-gray-100">
      <div className="rounded-lg border border-green-400 bg-green-300 text-green-900 p-5 shadow-2xl hover:shadow transition duration-200 divide-y divide-solid divide-green-400">
        <div className="flex flex-row">
          <span className="mr-2 pt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </span>
          <h2 className="pb-3 text-lg font-bold">Successful</h2>
        </div>

        <p className="pt-3">{message}</p>
      </div>
    </div>
  );
};

export default Alert;
