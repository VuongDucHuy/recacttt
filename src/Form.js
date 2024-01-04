import React from 'react';

const MyForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600">Đăng Ký</h2>

      <form className="space-y-4">

        <div className="flex flex-col">
          <label htmlFor="type" className="text-gray-600 text-sm font-medium mb-2">Loại:</label>
          <select id="type" name="type" className="w-full p-2 border rounded-md">
            <option value="thuong">Thường</option>
            <option value="vip">VIP</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="range" className="text-gray-600 text-sm font-medium mb-2">Đánh Giá (1-10):</label>
          <input type="range" id="range" name="range" min="1" max="10" className="w-full bg-blue-100 p-2 border rounded-md" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="question" className="text-gray-600 text-sm font-medium mb-2">Câu Hỏi:</label>
          <input type="text" id="question" name="question" className="w-full p-2 border rounded-md" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="file" className="text-gray-600 text-sm font-medium mb-2">File:</label>
          <input type="file" id="file" name="file" className="w-full p-2 border rounded-md" />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Gửi</button>

      </form>
    </div>
  );
};

export default MyForm;
