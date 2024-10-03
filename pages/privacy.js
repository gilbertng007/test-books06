import React from 'react';
import styled from 'styled-components';

const PrivacyPage = () => {
    return (
        <Container>
            <Header>
                <h1>隱私政策</h1>
            </Header>
            <Content>
                <Section>
                    <h2>我們收集哪些資料?</h2>
                    <div>
                        <p>我們收集以下類型的資料：</p>
                        <ul>
                            <li>姓名和電子郵件地址</li>
                            <li>IP地址和瀏覽器類型</li>
                            <li>您提供給我們的任何其他信息</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <h2>我們如何使用您的資料?</h2>
                    <p>我們使用您的資料來：</p>
                    <ul>
                        <li>改善我們的網站和服務</li>
                        <li>回應您的查詢和請求</li>
                        <li>向您發送新聞和更新（如果您選擇接受）</li>
                    </ul>
                </Section>
                <Section>
                    <h2>我們如何保護您的資料?</h2>
                    <p>我們採取以下措施來保護您的資料：</p>
                    <ul>
                        <li>我們使用加密來保護您的資料</li>
                        <li>我們將您的資料存放在安全的伺服器上</li>
                        <li>我們限制對您的資料的訪問權限</li>
                    </ul>
                </Section>
                <Section>
                    <h2>您的權利和選擇</h2>
                    <p>您有以下權利和選擇：</p>
                    <ul>
                        <li>訪問和更正您的資料的權利</li>
                        <li>選擇退出新聞和更新的權利</li>
                        <li>請求刪除您的資料的權利</li>
                    </ul>
                </Section>
                <Section>
                    <h2>不遵守本政策的後果</h2>
                    <p>如果您不遵守本政策，我們可能會：</p>
                    <ul>
                        <li>終止您的網站和服務訪問權限</li>
                        <li>採取法律行動</li>
                    </ul>
                </Section>
                <Section>
                    <h2>聯繫我們</h2>
                    <p>如果您有任何關於本政策的問題或關注，請聯繫我們 [插入聯繫電子郵件]。</p>
                </Section>
            </Content>
        </Container>
    );
};

export default PrivacyPage;

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  border-radius: 10px 10px 0 0;
`;

const Content = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
      
  &:hover {
    background-color: #444;
  }

  &:active {
    background-color: #555;
  }
`;
