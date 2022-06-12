
Page({
  data: {
    picker1visible:false,
    picker2visible:false,
    selectedCityValue: '',
    selectedTypeValue: '',
    placeHolderText: '请输入专业名称',
    citys: [
      { label: '北京', value: '北京' },
      { label: '上海', value: '上海' },
      { label: '天津', value: '天津' },
      { label: '重庆', value: '重庆' },
      { label: '安徽', value: '安徽' },
      { label: '福建', value: '福建' },
      { label: '广东', value: '广东' },
      { label: '广西', value: '广西' },
      { label: '甘肃', value: '甘肃' },
      { label: '贵州', value: '贵州' },
      { label: '河北', value: '河北' },
      { label: '湖北', value: '湖北' },
      { label: '黑龙江', value: '黑龙江' },
      { label: '海南', value: '海南' },
      { label: '河南', value: '河南' },
      { label: '湖南', value: '湖南' },
      { label: '吉林', value: '吉林' },
      { label: '江苏', value: '江苏' },
      { label: '江西', value: '江西' },
      { label: '辽宁', value: '辽宁' },
      { label: '内蒙古', value: '内蒙古' },
      { label: '宁夏', value: '宁夏' },
      { label: '青海', value: '青海' },
      { label: '山东', value: '山东' },
      { label: '山西', value: '山西' },
      { label: '陕西', value: '陕西' },
      { label: '四川', value: '四川' },
      { label: '西藏', value: '西藏' },
      { label: '新疆', value: '新疆' },
      { label: '云南', value: '云南' },
      { label: '浙江', value: '浙江' },
    ],
    type: [
      { label: '985', value: '985' },
      { label: '211', value: '211' },
      { label: '一般高校', value: '一般高校' },
    ]
  },

  onBindChange(e) {
    if(e.detail.value == '0') {
      this.setData ({
        placeHolderText: "请输入专业名称"
      })
    }
    else {
      this.setData ({
        placeHolderText: "请输入专业课名称"
      })
    }
  },

  onColumnChange(e) {
    console.log('column change:', e.detail);
  },
  
  onClickPicker(e) {
    this.setData({
      picker1visible: true,
    });
  },
  onClickPicker2(e) {
    this.setData({
      picker2visible: true,
    });
  },

  onPickerConfirm(e) {
    console.log('picker confirm:', e.detail);
    this.setData({
      picker1visible: false,
      selectedCityValue:  e.detail.value,
    });
  },
  onPicker2Confirm(e) {
    console.log('picker2 confirm:', e.detail);
    this.setData({
      picker2visible: false,
      selectedTypeValue:  e.detail.value,
    });
  },

  onPickerChange(e) {
    console.log('picker change:', e.detail);
  },
  onPicker2Change(e) {
    console.log('picker2 change:', e.detail);
  },

  onPickerCancel() {
    console.log('picker1 cancel:');
    this.setData({
      picker1visible: false,
    });
  },
  onPicker2Cancel() {
    console.log('picker2 cancel:');
    this.setData({
      picker2visible: false,
    });
  },

  submitHandle(e) {
    wx.navigateTo({
      url: '../select/select',
    })
  }
});