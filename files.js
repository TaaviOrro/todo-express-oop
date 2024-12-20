import fs from 'node:fs/promises'

class FileManager {

    async writeFile(filename, data) {
        try {
            data = JSON.stringify(data, null, 2)
            await fs.writeFile(filename, data)
        } catch(error){
            console.log('write error =>', error)
        }
    }

    async readFile(filename) {
        try {
            const fileContent = await fs.readFile(filename, 'UTF8')
            const fileData = json.parse(fileContent)
            return fileData
        } catch(error){
            console.error('read error => ', error)
            return null
        }
    }
}

export const fileManager = new FileManager()