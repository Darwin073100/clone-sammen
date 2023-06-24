import React from 'react'
import { Header } from '../container/Header'
import { Main } from '../container/Main'
import { MainHeader } from "../component/MainHeader";
import { PostSection } from "../component/PostSection";
import { InformationAside } from "../component/InformationAside";
import { MainContent } from "../container/MainContent";
import { Post } from '../component/Post';

function App() {
  return (
    <>
      <Header />
      <Main>
        <MainHeader />
        <MainContent>
            <PostSection>
              <Post figure={"red"}/>
              <Post figure={"purple"}/>
              <Post figure={"yellow"}/>
            </PostSection>
            <InformationAside />
        </MainContent>
      </Main>
    </>
  )
}

export { App }