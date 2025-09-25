export default [
    {
        "id": "1",
        "title": "AI Quản lí Chi tiêu",
        "chats": [
            {
                "question": "Làm sao để thêm một giao dịch mới?",
                "response": "📝 Nhập số tiền, loại (thu/chi), danh mục, ngày và mô tả → nhấn 'Lưu'. Giao dịch sẽ hiển thị ngay.",
                "actions": [
                    {
                        "mdi": "mdi-wallet-plus",
                        "title": "Thêm giao dịch",
                        "value": "add_transaction"
                    }
                ]
            },
            {
                "question": "Làm sao để tạo ngân sách hàng tháng?",
                "response": "📌 Vào 'Ngân sách', chọn tháng và giới hạn cho từng danh mục (ví dụ: Ăn uống 3.000.000đ). Ứng dụng sẽ cảnh báo khi sắp đạt mức.",
                "actions": [
                    {
                        "mdi": "mdi-finance",
                        "title": "Tạo ngân sách",
                        "value": "add_saving"
                    }
                ]
            },
            {
                "question": "Tôi muốn xem báo cáo chi tiêu, làm sao?",
                "response": "📈 Xem biểu đồ theo tháng/danh mục, hoặc xuất file PDF/CSV.",
                "actions": [
                    {
                        "mdi": "mdi-chart-line",
                        "title": "Xem báo cáo tháng này",
                        "route": "/"
                    },
                    {
                        "mdi": "mdi-file-export",
                        "title": "Xuất báo cáo PDF",
                        "value": "export_pdf"
                    }
                ]
            },
            {
                "question": "Tôi muốn xem báo cáo chi tiêu, làm sao?",
                "response": "📈 Xem biểu đồ theo tháng/danh mục, hoặc xuất file PDF/CSV.",
                "actions": [

                ]
            }
        ]
    },
    {
        "id": "4",
        "title": "Kháng chiến chống Mỹ",
        "chats": [
            {
                "question": "Mỹ chính thức tham chiến vào năm nào?",
                "response": "Khoảng năm 1965, khởi đầu từ tăng viện quân sự và chiến tranh trực tiếp."
            },
            {
                "question": "Chiến tranh phá hoại lần thứ nhất là gì?",
                "response": "Chiến dịch tập trung bắn phá miền Bắc bằng B‑52 và máy bay chiến lược."
            },
            {
                "question": "Sự kiện Tết Mậu Thân 1968 có gì đáng chú ý?",
                "response": "Một chiến dịch tổng tấn công quy mô toàn miền Nam khiến cả thế giới chú ý đến Việt Nam."
            },
            {
                "question": "Chiến dịch Hồ Chí Minh năm 1975 diễn ra ra sao?",
                "response": "Từ 26/4 đến 30/4/1975, kết thúc bằng việc chiếm Dinh Độc Lập."
            },
            {
                "question": "Mỹ ký hiệp định nào để rút quân?",
                "response": "Hiệp định Paris năm 1973, cam kết rút quân Mỹ khỏi Việt Nam."
            },
            {
                "question": "Vai trò của Quân Giải phóng miền Nam?",
                "response": "Lực lượng chủ lực kết hợp với bộ đội miền Bắc tạo nên thế trận đồng bộ."
            },
            {
                "question": "Ảnh hưởng của chiến tranh đến dân cư?",
                "response": "Cá nhân và cộng đồng chịu tổn thương nặng nề về con người, tài sản và môi trường."
            },
            {
                "question": "Ý nghĩa của chiến thắng năm 1975 là gì?",
                "response": "Chấm dứt chiến tranh, thống nhất đất nước và kiến thiết nền tảng cho sự phát triển sau này."
            }
        ]
    },
    {
        "id": "5",
        "title": "Triều đại phong kiến Đại Việt",
        "chats": [
            {
                "question": "Nhà Lý ra đời khi nào?",
                "response": "Từ năm 1009 do Lý Thái Tổ sáng lập."
            },
            {
                "question": "Nhà Trần có gì nổi bật?",
                "response": "Ba lần đánh bại Nguyên Mông vào các năm 1258, 1285, 1288."
            },
            {
                "question": "Nhà Hồ xây dựng những công trình gì?",
                "response": "Thành Nhà Hồ ở Thanh Hóa vào năm 1397."
            },
            {
                "question": "Nhà Lê sơ chú trọng gì trong chính trị?",
                "response": "Triển khai nhiều cải cách hành chính và luật pháp."
            },
            {
                "question": "Triều Nguyễn ảnh hưởng đến văn hóa ra sao?",
                "response": "Định hình chữ quốc ngữ, văn học, kiến trúc cung đình."
            },
            {
                "question": "Triều đại nào có thời kỳ hưng thịnh nhất?",
                "response": "Nhà Lê trung hưng từ thế kỷ XIV–XVII."
            },
            {
                "question": "Thế nào là chính sách quân điền?",
                "response": "Quân nhân sau khi giải ngũ được cấp đất canh tác."
            },
            {
                "question": "Vai trò của Quốc Tử Giám?",
                "response": "Là trường đại học đầu tiên ở Đông Nam Á, đào tạo quan lại."
            }
        ]
    },
    {
        "id": "6",
        "title": "Nhân vật lịch sử tiêu biểu",
        "chats": [
            {
                "question": "Ai là Ngô Quyền?",
                "response": "Danh tướng đánh thắng quân Nam Hán năm 938 trên sông Bạch Đằng."
            },
            {
                "question": "Trần Hưng Đạo có gì nổi bật?",
                "response": "Chỉ huy ba trận Thăng Long, Bình Lệ Nguyên, vườn không nhà trống."
            },
            {
                "question": "Lê Lợi là ai?",
                "response": "Lãnh đạo khởi nghĩa Lam Sơn lật đổ nhà Minh, tái lập độc lập năm 1428."
            },
            {
                "question": "Nguyễn Ánh là ai?",
                "response": "Sau này là vua Gia Long, sáng lập triều Nguyễn năm 1802."
            },
            {
                "question": "Hồ Chí Minh đóng góp gì?",
                "response": "Lãnh đạo Cách mạng Tháng Tám, thành lập chính quyền, kháng chiến 2 cuộc."
            },
            {
                "question": "Nguyễn Trãi nổi tiếng với gì?",
                "response": "Là văn thần, chính khách, tác giả Bình Ngô đại cáo."
            },
            {
                "question": "Phan Bội Châu hoạt động gì?",
                "response": "Nhà cách mạng đầu thế kỷ XX, sáng lập Đông Du, Việt Nam Quang phục hội."
            },
            {
                "question": "Võ Nguyên Giáp nổi bật ở điểm nào?",
                "response": "Đại tướng, chỉ huy Điện Biên Phủ, nổi tiếng chiến lược linh hoạt."
            }
        ]
    },
    {
        "id": "7",
        "title": "Địa danh lịch sử",
        "chats": [
            {
                "question": "Thăng Long được lập khi nào?",
                "response": "Năm 1010, Lý Thái Tổ dời đô từ Hoa Lư vào Thăng Long (Hà Nội ngày nay)."
            },
            {
                "question": "Thành Nhà Hồ nằm ở đâu?",
                "response": "Thanh Hóa, xây dựng năm 1397, là minh chứng kiến trúc quân sự."
            },
            {
                "question": "Văn Miếu – Quốc Tử Giám có ý nghĩa gì?",
                "response": "Là trung tâm giáo dục và thi cử của triều đình Lý, Trần, Lê."
            },
            {
                "question": "Chiến khu Việt Bắc là gì?",
                "response": "Căn cứ địa lớn của Việt Minh thời chống Pháp (1946–1954)."
            },
            {
                "question": "Cột cờ Hà Nội xây khi nào?",
                "response": "Năm 1812 dưới triều vua Gia Long, trụ sở hành chính."
            },
            {
                "question": "Địa đạo Củ Chi có vai trò gì?",
                "response": "Nơi trú ẩn, tác chiến, bảo vệ dân và kế hoạch quấy rối Mỹ–Ngụy."
            },
            {
                "question": "Hầm Đờ Cát ở Huế là gì?",
                "response": "Hầm chỉ huy tập trung dưới Trường Quốc học Huế, dùng khi tổng tiến công Tết Mậu Thân."
            },
            {
                "question": "Bến Nhà Rồng có gì nổi bật?",
                "response": "Nơi Bác Hồ ra đi tìm đường cứu nước (1911), nay là bảo tàng."
            }
        ]
    },
    {
        "id": "8",
        "title": "Văn hóa và xã hội",
        "chats": [
            {
                "question": "Chữ Nôm ra đời khi nào?",
                "response": "Từ TK X–XI, dùng để viết tiếng Việt song song với chữ Hán."
            },
            {
                "question": "Tết Nguyên Đán có nguồn gốc từ đâu?",
                "response": "Ảnh hưởng từ Tết âm lịch của Trung Quốc, phát triển thành nét văn hóa bản địa."
            },
            {
                "question": "Lễ hội Chùa Hương là gì?",
                "response": "Lễ hội tâm linh lớn ở miền Bắc, thu hút hàng trăm nghìn người mỗi năm."
            },
            {
                "question": "Nhạc cụ dân tộc điển hình?",
                "response": "Đàn tranh, đàn bầu, sáo trúc: tiếng nhạc truyền thống đặc trưng."
            },
            {
                "question": "Trang phục truyền thống của phụ nữ miền Bắc?",
                "response": "Áo dài truyền thống với áo dài cổ đứng, yếm và mấn thắt đầu."
            },
            {
                "question": "Hội An được UNESCO công nhận khi nào?",
                "response": "Năm 1999 – di sản văn hóa thế giới."
            },
            {
                "question": "Nét văn hóa Óc Eo là gì?",
                "response": "Nền văn minh cổ của người Khmer Nam Bộ cách đây trên 1.000 năm."
            },
            {
                "question": "Ẩm thực Huế có gì nổi bật?",
                "response": "Bún bò Huế, cơm hến, bánh bèo – tinh tế, cân bằng hương vị."
            }
        ]
    },
    {
        "id": "9",
        "title": "Phát triển hiện đại sau 1975",
        "chats": [
            {
                "question": "Việt Nam tái thiết như thế nào sau chiến tranh?",
                "response": "Phục hồi kinh tế, nâng cấp cơ sở hạ tầng, tập trung vào nông nghiệp và công nghiệp nhẹ."
            },
            {
                "question": "Đổi mới 1986 có tác động ra sao?",
                "response": "Thay đổi từ kế hoạch hóa tập trung sang cơ chế thị trường định hướng xã hội chủ nghĩa."
            },
            {
                "question": "Việt Nam gia nhập ASEAN năm nào?",
                "response": "Năm 1995."
            },
            {
                "question": "Việt Nam gia nhập WTO lúc nào?",
                "response": "Năm 2007."
            },
            {
                "question": "Chỉ số giáo dục/năng lực cạnh tranh cải thiện thế nào?",
                "response": "Tăng trưởng ổn định, học sinh Việt Nam thuộc nhóm dẫn đầu trong các kỳ kiểm tra PISA."
            },
            {
                "question": "Công nghệ thông tin phát triển ra sao?",
                "response": "Từ 2000, bùng nổ startup, hạ tầng Internet phủ sóng toàn quốc."
            },
            {
                "question": "Việt Nam đón Olympic lần nào?",
                "response": "Chưa đăng cai Olympic, nhưng tham dự liên tục từ 1980."
            },
            {
                "question": "Tỷ lệ tăng trưởng GDP hiện nay là bao nhiêu?",
                "response": "Khoảng 6–7% mỗi năm trong giai đoạn 2010–2020."
            }
        ]
    },
    {
        "id": "10",
        "title": "Giáo dục & Việt Nam hiện đại",
        "chats": [
            {
                "question": "Hệ thống giáo dục hiện nay bao gồm mấy cấp?",
                "response": "Mầm non, tiểu học, THCS, THPT, đại học và sau đại học."
            },
            {
                "question": "Tỷ lệ học sinh đậu đại học hàng năm?",
                "response": "Khoảng 50–60% so với tổng số thí sinh dự thi."
            },
            {
                "question": "Môn học phổ biến trong kỳ thi THPT Quốc gia?",
                "response": "Toán, Ngữ văn, Ngoại ngữ, Vật lý, Hóa học, Sinh học, Lịch sử, Địa lý."
            },
            {
                "question": "Các trường đại học nổi bật?",
                "response": "ĐHQG Hà Nội, ĐHQG TP.HCM, Bách Khoa, Kinh tế Quốc dân..."
            },
            {
                "question": "Giáo dục STEM được chú trọng ra sao?",
                "response": "Đưa vào chương trình phổ thông, thúc đẩy kỹ năng logic, lập trình, tư duy khoa học."
            },
            {
                "question": "Tình trạng giáo viên ở vùng sâu, vùng xa?",
                "response": "Chất lượng còn hạn chế, các chính sách hỗ trợ vẫn đang mở rộng."
            },
            {
                "question": "Học trực tuyến phổ biến chưa?",
                "response": "Phát triển mạnh sau Covid‑19, hệ thống LMS và edtech mở rộng nhanh."
            },
            {
                "question": "Các kỳ thi quốc tế Việt Nam tham gia?",
                "response": "Olympiad Toán, Vật lý, Hóa học, Sinh học, Tin học quốc tế."
            }
        ]
    },
    {
        "id": "11",
        "title": "Tư tưởng Hồ Chí Minh",
        "chats": [
            {
                "question": "Tư tưởng Hồ Chí Minh là gì?",
                "response": "Là hệ thống quan điểm về đấu tranh, độc lập dân tộc, chủ nghĩa xã hội và đạo đức cách mạng."
            },
            {
                "question": "Ba phẩm chất của đạo đức cách mạng?",
                "response": "Cần kiệm liêm chính, chí công vô tư, hết lòng hết sức vì nước, vì dân."
            },
            {
                "question": "Phương thức lãnh đạo Hồ Chí Minh nổi bật là gì?",
                "response": "Dân vận khéo, gần dân, hiểu dân, xây dựng cơ sở chính trị từ cơ sở."
            },
            {
                "question": "Phong cách làm việc đặc trưng của Người?",
                "response": "Khiêm tốn, chân thực, giản dị, nói ít làm nhiều."
            },
            {
                "question": "Tiêu biểu trong tư tưởng phát triển?",
                "response": "Khuyến khích đoàn kết dân tộc, đoàn kết quốc tế, hòa bình, phát triển."
            },
            {
                "question": "Nguồn gốc tư tưởng?",
                "response": "Học tập chủ nghĩa Marx – Lenin kết hợp tình hình cụ thể Việt Nam."
            },
            {
                "question": "Ảnh hưởng trong đào tạo cán bộ?",
                "response": "Kỷ luật hành chính và học tập lý luận gắn với thực tiễn."
            },
            {
                "question": "Di sản tinh thần Người để lại?",
                "response": "Lời dạy về học tập, công tác, tư tưởng Hồ Chí Minh vẫn được giảng dạy trong nhà trường, khối đoàn thể."
            }
        ]
    },
    {
        "id": "12",
        "title": "Tổ chức chính quyền hiện nay",
        "chats": [
            {
                "question": "Việt Nam là gì về hệ thống chính trị?",
                "response": "Là nước đơn nhất, chế độ Xã hội Chủ nghĩa, Đảng Cộng sản Việt Nam lãnh đạo."
            },
            {
                "question": "Cơ cấu bộ máy nhà nước gồm gì?",
                "response": "Bộ Chính trị, Quốc hội, Chính phủ, Tòa án, Viện kiểm sát."
            },
            {
                "question": "Quyền lập pháp thuộc về ai?",
                "response": "Thuộc về Quốc hội, cơ quan đại diện cao nhất của nhân dân."
            },
            {
                "question": "Thẩm quyền của Chính phủ?",
                "response": "Chấp hành Hiến pháp, luật pháp, tổ chức chính sách, quản lý xã hội."
            },
            {
                "question": "Hội đồng nhân dân là gì?",
                "response": "Cơ quan quyền lực ở địa phương, đại diện cho quyền làm chủ của dân."
            },
            {
                "question": "Chức năng của Mặt trận Tổ quốc?",
                "response": "Đoàn kết các tầng lớp nhân dân, giám sát quyền lực nhà nước."
            },
            {
                "question": "Cán bộ được tuyển qua hình thức nào?",
                "response": "Thi tuyển, xét tuyển, hoặc cấp theo yêu cầu ngành."
            },
            {
                "question": "Hệ thống kiểm toán nhà nước như thế nào?",
                "response": "Kiểm soát tài chính, ngân sách, thực thi chính sách công."
            }
        ]
    },
    {
        "id": "13",
        "title": "Kinh tế Việt Nam đồng thời",
        "chats": [
            {
                "question": "GDP Việt Nam hiện tại bao nhiêu?",
                "response": "Khoảng 404 tỷ USD (năm 2024)."
            },
            {
                "question": "Các ngành xuất khẩu chính?",
                "response": "Điện thoại, dệt may, thủy sản, cà phê, gạo."
            },
            {
                "question": "FDI đóng góp gì?",
                "response": "Thu hút vốn nước ngoài, công nghệ, tạo việc làm và chuyển giao kỹ năng."
            },
            {
                "question": "Tăng trưởng bình quân giai đoạn 2010–2020?",
                "response": "Khoảng 6–7% mỗi năm."
            },
            {
                "question": "Tỷ lệ thất nghiệp hiện tại?",
                "response": "Dưới 2,5% (tính trên lao động trong độ tuổi)."
            },
            {
                "question": "Ngành nào Việt Nam đang hướng đến?",
                "response": "Công nghệ cao, năng lượng tái tạo, logistics, startup."
            },
            {
                "question": "Chiến lược phát triển kinh tế bền vững?",
                "response": "Ưu tiên xanh hóa, kinh tế tuần hoàn, nông nghiệp thông minh."
            },
            {
                "question": "Tác động của Covid‑19 đến kinh tế?",
                "response": "Tăng trưởng chững lại, nhưng phục hồi nhanh nhờ xuất khẩu và đầu tư."
            }
        ]
    },
    {
        "id": "14",
        "title": "Môi trường & Biến đổi khí hậu",
        "chats": [
            {
                "question": "Việt Nam đối mặt biến đổi khí hậu như thế nào?",
                "response": "Ngập lụt, xâm nhập mặn, sạt lở bờ biển và vùng ven đồi núi."
            },
            {
                "question": "Các giải pháp giảm thiểu?",
                "response": "Trồng rừng, thiết kế hạ tầng xanh, tái chế, nâng cao nhận thức cộng đồng."
            },
            {
                "question": "Dự án nào ứng phó tốt?",
                "response": "Dự án phòng chống xâm thực ven biển ở ĐBSCL, trồng rừng ngập mặn Cần Giờ."
            },
            {
                "question": "Đóng góp của người dân?",
                "response": "Thu gom rác thải, hạn chế nhựa, sử dụng năng lượng xanh, tiết kiệm nước."
            },
            {
                "question": "Chính sách quốc gia nào được thực hiện?",
                "response": "Chiến lược quốc gia về tăng trưởng xanh và phát triển bền vững."
            },
            {
                "question": "Biến đổi khí hậu ảnh hưởng nông nghiệp ra sao?",
                "response": "Thời tiết thất thường, hạn, mặn, sâu bệnh gây ảnh hưởng năng suất."
            },
            {
                "question": "Việt Nam tham gia cam kết quốc tế nào?",
                "response": "Thỏa thuận Paris năm 2015, COP26, COP27."
            },
            {
                "question": "Vai trò của giáo dục môi trường?",
                "response": "Giáo dục bản địa từ trường học, truyền thông, tổ chức cộng đồng."
            }
        ]
    },
    {
        "id": "15",
        "title": "Y tế cộng đồng",
        "chats": [
            {
                "question": "Việt Nam ứng phó Covid‑19 ra sao?",
                "response": "Phong tỏa sớm, xét nghiệm rộng, truy vết, cách ly tập trung, tiêm chủng hiệu quả."
            },
            {
                "question": "Tỷ lệ tiêm chủng hiện nay?",
                "response": "Trên 90% đủ 2 liều cơ bản, nhiều người đã tiêm mũi nhắc lại."
            },
            {
                "question": "Các bệnh truyền nhiễm phổ biến?",
                "response": "Sốt xuất huyết, thủy đậu, tay chân miệng, COVID‑19."
            },
            {
                "question": "Chương trình y tế cơ sở có gì?",
                "response": "Khám chữa ban đầu, tiêm chủng, truyền thông giáo dục sức khỏe."
            },
            {
                "question": "Phòng chống dịch bệnh tương lai?",
                "response": "Xây dựng hệ giám sát, phòng thí nghiệm, đào tạo chuyên môn."
            },
            {
                "question": "Vai trò của y tế dự phòng?",
                "response": "Phát hiện sớm - cách ly - điều trị để ngăn bùng phát dịch."
            },
            {
                "question": "Khoảng cách trung bình tới trạm y tế?",
                "response": "Tại đô thị <5 km, nông thôn <10 km."
            },
            {
                "question": "Tỷ lệ bao phủ bảo hiểm y tế?",
                "response": "Trên 90% dân số đã tham gia bảo hiểm y tế."
            }
        ]
    },
    {
        "id": "16",
        "title": "Du lịch và Văn hóa thế giới",
        "chats": [
            {
                "question": "Di sản thế giới của Việt Nam?",
                "response": "Có 8 di sản: Vịnh Hạ Long, Hội An, Mỹ Sơn, Tràng An, Cố đô Huế…."
            },
            {
                "question": "Các địa điểm du lịch nổi tiếng?",
                "response": "Hà Nội, Sài Gòn, Đà Nẵng, Nha Trang, Phú Quốc, Sa Pa, Đà Lạt."
            },
            {
                "question": "Tết ở Nhật Bản diễn ra khi nào?",
                "response": "Ngày 1 tháng 1 Dương lịch, truyền thống với lễ chùa và đón năm mới."
            },
            {
                "question": "Lễ hội Holi ở Ấn Độ là gì?",
                "response": "Lễ hội sắc màu vào tháng 2–3, gắn với mừng mùa xuân."
            },
            {
                "question": "Hanami là gì ở Nhật?",
                "response": "Ngắm hoa anh đào vào mùa xuân, biểu tượng tạm thời của vẻ đẹp."
            },
            {
                "question": "Carnival Rio nổi tiếng ra sao?",
                "response": "Lễ hội đường phố ở Brazil, diễu hành với nhạc samba rực rỡ."
            },
            {
                "question": "Giáo dục văn hóa địa phương ra sao?",
                "response": "Phát triển du lịch gắn với bảo tồn phong tục, ẩm thực, lễ hội."
            },
            {
                "question": "Ý nghĩa của di sản văn hóa phi vật thể?",
                "response": "Giúp bảo tồn bản sắc, truyền thống, tạo giá trị cộng đồng."
            }
        ]
    },
    {
        "id": "17",
        "title": "Khoa học và công nghệ",
        "chats": [
            {
                "question": "Việt Nam có vệ tinh nào?",
                "response": "Vinasat‑1 (năm 2008), PicoDragon (năm 2013) – vệ tinh siêu nhỏ."
            },
            {
                "question": "Một startup Việt nổi bật là gì?",
                "response": "Tiki, Sendo, MoMo, ZaloPay, nhắm mảng fintech và thương mại điện tử."
            },
            {
                "question": "Research field nào đang phát triển?",
                "response": "Trí tuệ nhân tạo, robotics, công nghệ sinh học, IoT."
            },
            {
                "question": "Trung tâm AI nào ở Việt Nam?",
                "response": "Viện AI, các trường Đại học Quốc gia, trung tâm thuộc VNG, Viettel."
            },
            {
                "question": "Robotics application ở Việt Nam?",
                "response": "Robot hướng dẫn sân bay, robot vận chuyển bệnh viện, tự động hóa sản xuất."
            },
            {
                "question": "Công nghệ 5G triển khai ra sao?",
                "response": "Bắt đầu từ năm 2020, phủ sóng tại nhiều thành phố lớn."
            },
            {
                "question": "Chương trình vũ khí quốc gia là gì?",
                "response": "Sản xuất tên lửa, radar, vệ tinh, UAV cho quốc phòng."
            },
            {
                "question": "Mỹ bảo vệ dữ liệu cá nhân như thế nào?",
                "response": "Luật CCPA (California), GDPR tại EU – yêu cầu minh bạch và bảo vệ."
            }
        ]
    },
    {
        "id": "18",
        "title": "Thể thao & Giải trí",
        "chats": [
            {
                "question": "Phan Văn Đức và Hoàng Đức là ai?",
                "response": "Cầu thủ nổi bật của tuyển Việt Nam và CLB Sông Lam Nghệ An & Viettel FC."
            },
            {
                "question": "SEA Games Việt Nam đạt gì?",
                "response": "HCV bóng đá nam năm 2019, nhiều HCV ở thể thao Olympic."
            },
            {
                "question": "Nguyễn Tiến Linh nổi bật ra sao?",
                "response": "Tiền đạo xuất sắc, ghi nhiều bàn cho đội tuyển."
            },
            {
                "question": "Giải bóng đá V-League thu hút số nào?",
                "response": "Khoảng 13 đội, trung bình 60.000 người xem cả mùa."
            },
            {
                "question": "E‑sports phát triển không?",
                "response": "Nhiều giải AOG, VCS, tổ chức quy mô Đông Nam Á."
            },
            {
                "question": "Olympic 2024 Việt Nam tham dự ra sao?",
                "response": "Cử tạ, điền kinh, bơi, đạt 1 HCB, nhiều kỷ lục phá vỡ."
            },
            {
                "question": "Thể thao điện tử có bao nhiêu người chơi?",
                "response": "Hơn 2 triệu game thủ chuyên/ bán chuyên khắp cả nước."
            },
            {
                "question": "Ca sĩ Sơn Tùng M‑TP nổi bật?",
                "response": "Hit như \"Hãy trao cho anh\", hơn 300 triệu view trên YouTube."
            }
        ]
    },
    {
        "id": "19",
        "title": "Mẹo & Học tập",
        "chats": [
            {
                "question": "Làm sao để tập trung học tốt?",
                "response": "Chia nhỏ thời gian, học Pomodoro (25 phút học + 5 phút nghỉ)."
            },
            {
                "question": "Phương pháp ghi chép hiệu quả?",
                "response": "Cornell note-taking: 3 phần: ý chính, ghi chú, tóm tắt."
            },
            {
                "question": "Cách học ngoại ngữ nhanh?",
                "response": "Nghe – nói – lặp lại mỗi ngày, thay bằng ngữ cảnh thực."
            },
            {
                "question": "Làm sao để bảo vệ sức khỏe khi học nhiều?",
                "response": "Không ngồi lâu quá 45 phút, đứng lên vận động, uống nhiều nước."
            },
            {
                "question": "Lập kế hoạch học tập thế nào?",
                "response": "Set mục tiêu SMART (Cụ thể – Đo lường – Khả thi – Thực tế – Thời hạn)."
            },
            {
                "question": "Ứng dụng học phổ biến?",
                "response": "Quizlet, Anki, Khan Academy, Coursera."
            },
            {
                "question": "Cách tăng kỹ năng viết?",
                "response": "Viết blog – viết mỗi ngày, đọc biểu mẫu mẫu, nhờ người nhận xét."
            },
            {
                "question": "Phương pháp ôn thi hiệu quả?",
                "response": "Ôn theo đề thi cũ, tự kiểm tra, flashcards và nhóm học."
            }
        ]
    },
    {
        "id": "20",
        "title": "Xu hướng toàn cầu",
        "chats": [
            {
                "question": "Blockchain có ứng dụng gì ngoài tiền mã hóa?",
                "response": "Chuỗi cung ứng minh bạch, bảo mật y tế, bầu cử điện tử."
            },
            {
                "question": "Trí tuệ nhân tạo phát triển thế nào?",
                "response": "AI đang ứng dụng trong y tế, tài chính, sản xuất, xử lý ngôn ngữ tự nhiên."
            },
            {
                "question": "Mạng xã hội tương lai ra sao?",
                "response": "Định hướng theo Decentralized Social, quyền riêng tư và kiểm soát dữ liệu cá nhân."
            },
            {
                "question": "Ngành năng lượng tái tạo có gì đặc biệt?",
                "response": "Có giá thành giảm nhanh, ứng dụng điện mặt trời, gió, sinh khối."
            },
            {
                "question": "Xe tự hành hiện trạng nào?",
                "response": "Phát triển ở cấp độ 2–4: hỗ trợ người lái đến tự động hóa hoàn toàn."
            },
            {
                "question": "Metaverse là gì?",
                "response": "Không gian ảo kết nối internet – AR/VR, thương mại, giải trí, giáo dục."
            },
            {
                "question": "Thách thức toàn cầu lớn nhất hiện nay?",
                "response": "Biến đổi khí hậu, an ninh lương thực, sức khỏe cộng đồng, bất bình đẳng."
            },
            {
                "question": "Kinh tế toàn cầu phục hồi post‑Covid?",
                "response": "Tăng trưởng chậm nhưng phục hồi mạnh nhờ nội địa hoá, kỹ thuật số hóa."
            }
        ]
    },
    {
        "id": "df4d",
        "title": "New chat 1753346782952",
        "chats": [
            {
                "question": "12345",
                "response": "hehehehehe"
            },
            {
                "question": "1234",
                "response": "hehehehehe"
            }
        ]
    },
    {
        "id": "e407",
        "title": "New chat 1753346817802",
        "chats": [
            {
                "question": "nnnaaa",
                "response": "hehehehehe"
            }
        ]
    },
    {
        "id": "c2b7",
        "title": "New chat 1753346885403",
        "chats": [
            {
                "question": "asda d",
                "response": "hehehehehe"
            }
        ]
    }
]