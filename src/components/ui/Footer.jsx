function Footer() {
  return (
    <footer className="flex h-20 flex-col justify-center bg-black text-white">
      <div className="text-center text-white">
        Design by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="border-b-4 border-b-green-500 hover:border-b-green-800"
          href="https://www.treverparish.com/"
        >
          Trever Parish
        </a>{" "}
      </div>
    </footer>
  );
}
export default Footer;
