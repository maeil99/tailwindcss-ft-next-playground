interface AlertProps {
  message?: string;
  type?: AlertColor;
}

export enum AlertColor {
  SUCCESS = "border-green-400 bg-green-300 text-green-900 divide-green-400",
  ERROR = "border-red-400 bg-red-300 text-red-900 divide-red-400",
  WARNING = "border-yellow-400 bg-yellow-300 text-yellow-900 divide-yellow-400",
}

const Alert = ({ message, type }: AlertProps) => {
  return (
    <div className="p-10 bg-gray-100">
      <div
        className={`${type} rounded-lg border p-5 shadow-2xl hover:shadow transition duration-200 divide-y divide-solid `}
      >
        <div className="flex flex-row">
          {/* icon */}
          {/* Icon is taken from heroicons.com */}
          {type === AlertColor.SUCCESS && (
            <>
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
            </>
          )}
          {type === AlertColor.WARNING && (
            <>
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </span>
              <h2 className="pb-3 text-lg font-bold">Warning</h2>
            </>
          )}
          {type === AlertColor.ERROR && (
            <>
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
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>
              <h2 className="pb-3 text-lg font-bold">Error</h2>
            </>
          )}
        </div>

        <p className="pt-3">{message}</p>
      </div>
    </div>
  );
};

export default Alert;
