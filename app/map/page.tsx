import Image from "next/image";
import { ReactNode } from "react";
import { FaParking, FaRestroom } from "react-icons/fa";
import {
  HiCalendar,
  HiOutlineClock,
  HiOutlineInformationCircle,
  HiOutlineMap,
  HiOutlinePhone,
  HiWifi,
} from "react-icons/hi";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";

import Map from "@/components/map";
import OfficeHours from "@/components/office-hours";
import Address from "@/components/page/map/address";
import PageHeading from "@/components/page-heading";
import { cloudinaryImgUrl } from "@/lib/utils";

const TableRow = ({ title, desc }: { title: ReactNode; desc: ReactNode }) => (
  <tr className="flex items-center border-b border-primary-900 py-5">
    <td className="flex w-28 shrink-0 items-center gap-x-2 font-semibold [&>svg]:mb-1 [&>svg]:text-primary-800">
      {title}
    </td>
    <td className="grow">{desc}</td>
  </tr>
);

export default function MapPage() {
  return (
    <div className="content-wrapper">
      <PageHeading text="오시는 길" className="mb-10" />
      <Map className="mb-10 max-h-96 xl:max-h-[460px]" />
      <Address />
      <table className="w-full">
        <tbody>
          <TableRow
            title={
              <>
                <HiOutlineMap />
                오시는길
              </>
            }
            desc={<>지하철 2호선 방배역 4번 출구에서 도보로 3분 거리입니다.</>}
          />
          <TableRow
            title={
              <>
                <MdOutlineDirectionsCarFilled />
                주차안내
              </>
            }
            desc={
              <>
                <p className="mb-4">건물 입구 옆 1시간 무료주차 가능합니다.</p>
                <Image
                  src={cloudinaryImgUrl("parking_covwsq.jpg")}
                  alt="주차 공간"
                  width={800}
                  height={450}
                  className="mx-auto w-full max-w-xl"
                  sizes="800px"
                />
              </>
            }
          />
          <TableRow
            title={
              <>
                <HiOutlinePhone />
                전화번호
              </>
            }
            desc={<>02-522-9730</>}
          />
          <TableRow
            title={
              <>
                <HiOutlineClock />
                진료시간
              </>
            }
            desc={<OfficeHours />}
          />
          <TableRow
            title={
              <>
                <HiOutlineInformationCircle />
                이용안내
              </>
            }
            desc={
              <ul className="flex flex-wrap gap-4 [&>li]:flex [&>li]:flex-col [&>li]:items-center [&>li]:gap-y-1">
                <li>
                  <HiCalendar size={32} className="text-primary-800" />
                  예약가능
                </li>
                <li>
                  <FaParking size={32} className="text-primary-800" />
                  주차공간
                </li>
                <li>
                  <FaRestroom size={32} className="text-primary-800" />
                  공용화장실
                </li>
                <li>
                  <HiWifi size={32} className="text-primary-800" />
                  무선인터넷
                </li>
              </ul>
            }
          />
        </tbody>
      </table>
    </div>
  );
}
