import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Iblog</Typography>
        <Text variant="h5">
          I'm a Computer Science graduate from India.I love learning new tech
          and building something out of it. Apart from that i also contribute to
          open source projects
          <br />
          Apart from that i also contribute to open source project. You can checkout my github profile here
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://github.com/Aniket1026"
              color="inherit"
              target="_blank"
            >
              <GitHub />
            </Link>
          </Box>
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
