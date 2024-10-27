function Flower({ colorFlor = '#2A272D', clipFill = '#FFFFFF' }) {
    return (
      <svg
        width="56"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_619_93)">
          <path
            d="M41.7673 34.2542C41.8273 33.8374 41.8591 33.4101 41.8591 32.9721C41.8591 32.5341 41.8273 32.1526 41.7743 31.7535L56.4336 32.2056C57.9662 32.2515 59.4565 31.7111 60.6007 30.6904C63.38 28.2144 67.8721 23.2907 65.1634 19.243C62.5113 15.2729 55.2223 8.67153 40.051 27.5822C39.546 26.9146 38.9527 26.3212 38.2817 25.8197L48.915 15.718C50.0274 14.6619 50.6878 13.2208 50.7691 11.6879C50.9633 7.97219 50.6243 1.31426 45.8426 0.388864C41.1563 -0.515342 31.3388 0.0179999 34.104 24.1066C33.7155 24.0536 33.3164 24.0254 32.9138 24.0254C32.4689 24.0254 32.031 24.0607 31.6072 24.1207L31.9109 9.45565C31.9427 7.92274 31.3847 6.43928 30.3535 5.30549C27.8497 2.55048 22.8809 -1.88931 18.862 0.858628C14.9209 3.55359 8.39472 10.9073 27.4577 25.8868C26.7973 26.3989 26.2075 26.9994 25.7131 27.674L15.5036 17.1449C14.4371 16.0429 12.9892 15.3966 11.4565 15.333C7.73786 15.1776 1.08806 15.5838 0.212255 20.3732C-0.645897 25.0779 -0.00669806 34.89 24.0463 31.8736C24.0039 32.2339 23.9756 32.6012 23.9756 32.9721C23.9756 33.4489 24.0145 33.9151 24.0851 34.3708L9.42238 34.2189C7.88971 34.2048 6.41002 34.777 5.287 35.8189C2.5607 38.3514 -1.82895 43.3669 0.960931 47.3581C3.6943 51.2717 11.1175 57.7212 25.8968 38.5033C26.4159 39.1602 27.0233 39.743 27.7014 40.2305L17.2764 50.5476C16.1852 51.6249 15.553 53.0801 15.5071 54.613C15.3871 58.3322 15.8638 64.9831 20.6631 65.8061C25.3671 66.6149 35.1705 65.8767 31.9109 41.8517C32.2429 41.887 32.5784 41.9082 32.9174 41.9082C33.4259 41.9082 33.9239 41.8623 34.4077 41.781V56.4497C34.4077 57.9826 34.9974 59.4554 36.0498 60.568C38.6101 63.2701 43.6672 67.6074 47.6331 64.7782C51.5177 62.002 57.8885 54.5141 38.5219 39.9302C39.0763 39.4817 39.5778 38.9695 40.0121 38.4044L50.0027 49.1418C51.048 50.265 52.4818 50.9432 54.011 51.0385C57.7261 51.2717 64.3829 51.0032 65.3576 46.2279C66.3111 41.5514 65.8768 31.7253 41.7673 34.2436V34.2542ZM32.9174 39.0896C29.5448 39.0896 26.8008 36.3452 26.8008 32.9721C26.8008 29.599 29.5448 26.8546 32.9174 26.8546C36.2899 26.8546 39.0339 29.599 39.0339 32.9721C39.0339 36.3452 36.2899 39.0896 32.9174 39.0896Z"

            className="color-flor"
            fill={colorFlor}  // Color dinámico
          />
        </g>
        <defs>
          <clipPath id="clip0_619_93">
            <rect width="66" height="66" fill={clipFill} /> {/* Otro color parametrizado */}
          </clipPath>
        </defs>
      </svg>
    );
  }
  
  export default Flower;
  