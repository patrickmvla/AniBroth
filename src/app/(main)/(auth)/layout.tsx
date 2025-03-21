const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex justify-center items-baseline">
      {children}
    </div>
  );
};

export default AuthLayout;
