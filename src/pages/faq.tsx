// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React from 'react';

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BsArrowRight, BsArrowUpRight, BsFileX } from 'react-icons/bs';

// Internal Components
import {
  A,
  Button,
  Content,
  H2,
  H3,
  HeroHeader,
  ItemH,
  ItemV,
  P,
  Section,
  Span,
  ULV2,
} from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import Accordion from '@site/src/components/Accordion';

// Import Assets
import ImageFAQ from '@site/static/assets/website/faq/faq-projects.webp';
import { BsChevronExpand } from 'react-icons/bs';

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';
import { PageMeta } from '@site/src/config/pageMeta';
import {
  General,
  Notifs,
  Chat,
  IntegratingPush,
  Governance,
  Token,
} from '@site/src/config/HomepageFAQ';

function FAQ() {
  const { t } = useTranslation();

  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  return (
    <Layout
      title={PageMeta.FAQS.pageTitle}
      description={PageMeta.FAQS.pageDescription}
      showNavbar='website'
    >
      <Head>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://comms.push.org/faq' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Push | FAQ' />
        <meta
          property='og:description'
          content='Find answers to your most common questions in our FAQ section. Get clear and concise explanations on a variety of topics to solve your queries quickly and efficiently.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/faqpreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta name='twitter:title' content='Push | FAQ' />
        <meta
          name='twitter:description'
          content='Find answers to your most common questions in our FAQ section. Get clear and concise explanations on a variety of topics to solve your queries quickly and efficiently.'
        />
        <meta
          property='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/faqpreview.png').default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Protocol',
            description: 'The Communication Protocol of Web3',
            url: 'https://comms.push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://x.com/PushChain',
              'https://www.linkedin.com/company/push-protocol/mycompany/',
            ],
          })}
        </script>
      </Head>

      <FAQWrapper>
        <FAQSection>
          <Content>
            <ItemH
              flexDirection={isMobile && 'column'}
              alignItems='flex-start'
              justifyContent='space-between'
              gap={!isMobile && '24px'}
            >
              <ItemV alignItems='flex-start' justifyContent='flex-start'>
                <H2
                  color='#FFF'
                  fontSize={isMobile ? '32px' : '36px'}
                  fontFamily='FK Grotesk Neue'
                  textAlign={isMobile && 'center'}
                  margin={isMobile && '0 auto'}
                  fontWeight='500'
                  lineHeight='130%'
                >
                  Frequently Asked <br /> Questions
                </H2>

                <FaqLink
                  href='https://discord.com/invite/pushchain'
                  target='_blank'
                  title='Discord'
                  fontSize='16px'
                  margin={isMobile ? '24px auto 0 auto' : '24px 0 0 0'}
                  background={GLOBALS.COLORS.HIGHLIGHT}
                  color={GLOBALS.COLORS.FONT_LIGHT}
                  fontFamily='FK Grotesk Neue'
                >
                  <p>Ask us on Discord</p>
                  <BsArrowRight className='anchorSVGlink' />
                </FaqLink>
              </ItemV>

              <ItemV alignItems='flex-start' justifyContent='flex-start'>
                <FAQText margin={isMobile && '64px 0 8px 0'}>General</FAQText>
                <AccordionGrid>
                  <Accordion items={General} fontFamily='FK Grotesk Neue' />
                </AccordionGrid>

                <FAQText margin='64px 0 8px 0'>Push Notifications</FAQText>
                <AccordionGrid>
                  <Accordion
                    items={Notifs}
                    fontFamily='FK Grotesk Neue'
                    firstOpen={false}
                  />
                </AccordionGrid>

                <FAQText margin='64px 0 8px 0'>Push Chat</FAQText>
                <AccordionGrid>
                  <Accordion
                    items={Chat}
                    fontFamily='FK Grotesk Neue'
                    firstOpen={false}
                  />
                </AccordionGrid>

                <FAQText margin='64px 0 8px 0'>Integrating Push</FAQText>
                <AccordionGrid>
                  <Accordion
                    items={IntegratingPush}
                    fontFamily='FK Grotesk Neue'
                    firstOpen={false}
                  />
                </AccordionGrid>

                <FAQText margin='64px 0 8px 0'>Push Governance</FAQText>
                <AccordionGrid>
                  <Accordion
                    items={Governance}
                    fontFamily='FK Grotesk Neue'
                    firstOpen={false}
                  />
                </AccordionGrid>

                <FAQText margin='64px 0 8px 0'>Push Token</FAQText>
                <AccordionGrid>
                  <Accordion
                    items={Token}
                    fontFamily='FK Grotesk Neue'
                    firstOpen={false}
                  />
                </AccordionGrid>
              </ItemV>
            </ItemH>
          </Content>
        </FAQSection>
      </FAQWrapper>
    </Layout>
  );
}

const FAQSection = styled(Section)``;

const FAQWrapper = styled(ItemV)`
  background: #0d0d0f;
  margin: 0;
  padding: 120px 0;

  @media ${device.mobileL} {
    padding: 64px 0;
  }
`;

const FaqLink = styled(A)`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: inherit;
  font-family: FK Grotesk Neue;

  p {
    margin: 0px !important;
  }
  .anchorSVGlink {
    color: #fff;
    top: 0px;
  }

  &:hover {
    text-decoration: none !important;
    .anchorSVGlink {
      color: #fff;
    }
  }
`;

const AccordionGrid = styled.div`
  max-width: 877px;
  min-width: 877px;

  @media ${device.laptop} {
    max-width: 100%;
    min-width: 100%;
  }
`;

const FAQText = styled(H3)`
  color: #fff;
  font-family: FK Grotesk Neue;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;

  @media ${device.mobileL} {
    font-size: 28px;
  }
`;

export default FAQ;
