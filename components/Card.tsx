interface Cards {
  children: React.ReactNode;
  className?: string;
  header: string;
  footer?: string;
  footerClassname?: string;
  headerClassname?: string;
}

const Card = ({
  children,
  className,
  header,
  footer,
  headerClassname,
  footerClassname,
}: Cards) => {
  return (
    <>
      <div className="py-24 flex items-center justify-center">
        {/* card goes here */}
        <div className="bg-white rounded-lg shadow-2xl">
          <div className={` p-16 w-auto ${className}`}>
            <header
              className={`pb-3 text-2xl font-extrabold ${headerClassname}`}
            >
              {header}
            </header>
            {children}
          </div>
          <footer
            className={` bg-gray-200 text-gray-400 text-right rounded-b-lg ${footerClassname}`}
          >
            {footer}
          </footer>
        </div>
      </div>
    </>
  );
};

export default Card;
