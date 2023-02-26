import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Image
        width="300"
        height="200"
        src="/img/404.png"
        alt="페이지를 찾을 수 없습니다."
      />
      <p>요청하신 페이지를 찾을 수 없습니다</p>
      <Link
        href="../"
        style={{
          display: "block",
          marginTop: "20px",
          color: "rgb(216, 100, 6)",
          fontWeight: "bold",
          fontSize: "1rem",
          paddingBottom: "300px",
        }}
      >
        돌아가기
      </Link>
    </div>
  );
};
export default NotFound;
