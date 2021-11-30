import styled from "styled-components";

export const MainProfileStyle = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 120px;
  background-color: #f4f4f4;
  .profile-contain {
    padding: 0 210px;
    height: 100%;
    width: 100%;
    .title-wrap {
      h2 {
        font-weight: 800;
        font-size: 56px;
        line-height: 76px;
      }
    }

    .logo-wrap {
      h2 {
        font-weight: 800;
        font-size: 56px;
        line-height: 76px;
      }
    }

    .contents-contain {
      width: 100%;
      height: calc(100% - 200px);
      display: flex;
      /* justify-content: space-between; */
      align-items: center;
      .profile-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .job {
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 33px;
        }

        .name {
          font-style: normal;
          font-weight: bold;
          font-size: 56px;
          line-height: 76px;
          letter-spacing: 1.24em;
        }

        .email-wrap {
          display: flex;
          .ew-title {
            font-weight: bold;
            font-size: 24px;
            line-height: 33px;
            margin-right: 20px;
          }
          a {
            .email {
              font-weight: 400;
              font-size: 24px;
              line-height: 33px;
            }
          }
        }

        .blog-wrap {
          display: flex;
          .bw-title {
            font-weight: bold;
            font-size: 24px;
            line-height: 33px;
            margin-right: 40px;
          }
          a {
            .blog {
              font-weight: 400;
              font-size: 24px;
              line-height: 33px;
            }
          }
        }
      }
    }

    .bar {
      height: 340px;
      width: 1px;
      border: 1px solid #000000;
      margin: 100px;
    }

    .pj-contain {
      display: flex;
      justify-content: center;
      .front-box {
        position: relative;
        width: 402px;
        height: 402px;
        background-color: white;
        margin-right: 20px;
        border-radius: 5px;
        box-shadow: 6px 6px 10px 0.5px #0000000d;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .fb-img {
        }
        .fb-title {
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          margin-bottom: 40px;
        }
        .fb-btn {
          a {
            background: #ececec;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
            border-radius: 10px;
            padding: 10px 30px;
            span {
            }
          }
        }
      }

      .video-box {
        position: relative;
        width: 402px;
        height: 402px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 6px 6px 10px 0.5px #0000000d;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .vb-img {
        }
        .vb-title {
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          margin-bottom: 40px;
        }
        .vb-btn {
          a {
            background: #ececec;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
            border-radius: 10px;
            padding: 10px 30px;
            span {
            }
          }
        }
      }
    }
  }
`;
