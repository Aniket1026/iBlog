import { GridFsStorage } from 'multer-gridfs-storage'
import multer from 'multer';
import dotenv from 'dotenv'

dotenv.config()

const USERNAME = process.env.DB_USERNAME; 
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
  url: `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.32apglg.mongodb.net/?retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ['image/png', 'image/jpg'];
        if (match.indexOf(file.memeType) === -1) {
            return `${Date.now()}-blog-${file.origionalname}`
        }

        return {
          bucketName: "photos",
          fileName: `${Date.now()}-blog-${file.origionalname}`,
        };
    }
});

export default multer({ storage });