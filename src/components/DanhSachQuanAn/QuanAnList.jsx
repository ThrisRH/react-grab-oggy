import React from "react";
import { Box, Flex, Container, Text } from "@chakra-ui/react";
import SliderQuanAn from "./SliderQuanAn";

const QuanAnList = () => {
  return (
    <Flex minHeight={"100vh"} justifyContent={"center"}>
      <Container maxW={"container.md"} padding={20}>
        <Box width={1220}>
          {/* Scrumb Area */}
          <Flex gap={5} alignItems={"center"} fontSize={16} p={"0px 12px"}>
            <Text color={"#00a5cf"}>Trang chủ</Text>
            &#62;
            <Text>Nhà hàng</Text>
          </Flex>

          {/* Near you */}
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={30}
              m={0}
              mb={20}
              p={"0px 12px"}
            >
              Món ngon gần bạn
            </Text>
            <Box>
              <SliderQuanAn />
            </Box>
          </Box>
        </Box>
      </Container>
    </Flex>
  );
};

export default QuanAnList;
