"use client";
import { descriptionStyle, headingStyle, linkStyle } from "@/components/styles";
import { dockerDescription, puppeteerDescription, webLink } from "@/components/textFile";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ResponseProps {
  result: any;
}

export default function Home() {

  const [dockerDownloads, setDockerDownloads] = useState("");
  const [puppeteerDownloads, setPuppeteerDownloads] = useState("");

  useEffect(() => {

    const fetchDockerData = async () => {
      try {
        const response = await fetch(`/api/scrapDocker`);
        const data: ResponseProps = await response.json();
        setDockerDownloads(data.result);
      } catch (error) {
        console.error('Error in fetching data:', error);
      }
    };

    const fetchPuppeteerData = async () => {
      try {
        const response = await fetch(`/api/scrapPuppeteer`);
        const data: ResponseProps = await response.json();
        setPuppeteerDownloads(data.result);
      } catch (error) {
        console.error('Error in fetching data:', error);
      }
    };

    fetchDockerData();
    fetchPuppeteerData();
  }, []);


  return (
    <main className="w-full p-5">
      <div className="flex-col text-[18px] items-center my-4">
        <h2 className={`${headingStyle}`}>Scrap Websites</h2>

        <div className="flex-col mb-8">
          <Link className={`${linkStyle}`} href={`${webLink + "docker"}`}>Docker</Link>
          <p className={`${descriptionStyle}`}>{`${dockerDescription}`}</p>
          <h2 className="font-medium">Weekly Downloads: {dockerDownloads}</h2>
        </div>

        <div className="flex-col">
          <Link className={`${linkStyle}`} href={`${webLink + "puppeteer"}`}>Puppeteer</Link>
          <p className={`${descriptionStyle}`}>{`${puppeteerDescription}`}</p>
          <h2 className="font-medium">Weekly Downloads: {puppeteerDownloads}</h2>
        </div>
      </div>
    </main>
  );
}
